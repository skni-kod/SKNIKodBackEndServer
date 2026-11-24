import re

from django.db import transaction
from django.http import Http404
from django.utils import timezone
from django.utils.text import slugify
from rest_framework import serializers, status
from rest_framework.parsers import FormParser, JSONParser, MultiPartParser
from rest_framework.permissions import DjangoModelPermissions
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Article, Gallery

POLISH = str.maketrans('ąćęłńóśźżĄĆĘŁŃÓŚŹŻ', 'acelnoszzACELNOSZZ')


class SocialNewsSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=100)
    text = serializers.CharField()
    image = serializers.ImageField(required=False)


def make_alias(title):
    return slugify(title.translate(POLISH))[:100].strip('-') or 'aktualnosc'


def plain_to_markdown(text):
    text = text.replace('\r\n', '\n').strip()
    # Facebook posts use single newlines as line breaks; markdown would merge them into one paragraph.
    return re.sub(r'(?<=[^\n])[ \t]*\n(?=[^\n])', '  \n', text)


def news_response(article):
    return {'id': article.id, 'alias': article.alias, 'title': article.title}


class SocialNewsListView(APIView):
    queryset = Article.objects.none()
    permission_classes = [DjangoModelPermissions]
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    @transaction.atomic
    def post(self, request, format=None):
        serializer = SocialNewsSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data
        now = timezone.now()
        article = Article.objects.create(
            title=data['title'],
            alias=make_alias(data['title']),
            text=plain_to_markdown(data['text']),
            group='News',
            creation_date=now,
            publication_date=now,
            creator=request.user,
        )
        if data.get('image'):
            article.gallery.add(Gallery.objects.create(gallery_name=data['title'][:100], image=data['image']))
        return Response(news_response(article), status=status.HTTP_201_CREATED)


class SocialNewsDetailView(APIView):
    queryset = Article.objects.none()
    permission_classes = [DjangoModelPermissions]

    @transaction.atomic
    def delete(self, request, pk=None, format=None):
        article = Article.objects.filter(pk=pk, group='News').first()
        if article is None:
            raise Http404
        gallery_ids = list(article.gallery.values_list('id', flat=True))
        article.delete()
        orphans = Gallery.objects.filter(
            id__in=gallery_ids, article__isnull=True, project__isnull=True, section__isnull=True
        )
        for image in orphans:
            image.image.delete(save=False)
            image.delete()
        return Response({'id': int(pk), 'deleted': True}, status=status.HTTP_200_OK)
