import io
from io import BytesIO
import datetime
import django_filters
from django.contrib.auth.models import User, Group
from django.http import Http404, HttpResponse, FileResponse
from django.views import View
from django.core.files import File as FFile
from django.views.generic import TemplateView
from django_filters.rest_framework import DjangoFilterBackend
from django.http import Http404
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

from rest_framework import viewsets, status
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import *

from .models import *
from RESTApi.custom_permissions import *
from RESTApi.serializers import *
from rest_framework import permissions

from allauth.socialaccount.providers.github.views import GitHubOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from rest_auth.registration.views import SocialLoginView, SocialConnectView


class GitHubLogin(SocialLoginView):
    adapter_class = GitHubOAuth2Adapter
    callback_url = 'http://127.0.0.1:8000/accounts/github/login/callback/'
    client_class = OAuth2Client


class GitHubConnect(SocialConnectView):
    adapter_class = GitHubOAuth2Adapter
    callback_url = 'http://127.0.0.1:8000/accounts/github/login/callback/'
    client_class = OAuth2Client


class IndexTemplateView(TemplateView):
    template_name = 'index.html'


class UserViewSetDetail(APIView):
    queryset = User.objects.none()
    permission_classes = [IsOwnerOrAdminForUserViewOrReadOnly]

    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404

    def get(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        self.check_object_permissions(self.request, queryset)
        serializer = UserSerializer(queryset)
        return Response(serializer.data)

    def put(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        self.check_object_permissions(self.request, queryset)
        serializer = UserUpdateSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        self.check_object_permissions(self.request, queryset)
        queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def patch(self, request,  pk=None, format=None):
        queryset = self.get_object(pk)
        self.check_object_permissions(self.request, queryset)
        serializer = UserUpdateSerializer(queryset, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserViewSetList(APIView):
    queryset = User.objects.none()
    permission_classes = [IsAdminOrReadOnly]

    def get(self, format=None):
        queryset = User.objects.all().order_by('-date_joined')
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GroupViewSetDetail(APIView):
    queryset = Group.objects.none()
    permission_classes = [IsAdminUser]

    def get_object(self, pk=None):
        try:
            return Group.objects.get(pk=pk)
        except Group.DoesNotExist:
            raise Http404

    def get(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = GroupSerializer(queryset)
        return Response(serializer.data)

    def put(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = GroupSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def patch(self, request,  pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = GroupSerializer(queryset, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GroupViewSetList(APIView):
    permission_classes = [IsAdminUser]
    queryset = Group.objects.none()

    def get(self, format=None):
        queryset = Group.objects.all()
        serializer = GroupSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = GroupSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProfileViewSetDetail(APIView):
    queryset = Profile.objects.none()
    permission_classes = [IsAdminOrReadOnly]

    def get_object(self, pk=None):
        try:
            return Profile.objects.get(pk=pk)
        except Profile.DoesNotExist:
            raise Http404

    def get(self, request, pk=None, format=None):
        queryset = self.get_object(pk=pk)
        serializer = ProfileSerializer(queryset)
        return Response(serializer.data)

    def put(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = ProfileSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def patch(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = ProfileSerializer(queryset, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProfileViewSetList(APIView):
    queryset = Profile.objects.none()
    permission_classes = [IsAdminOrReadOnly]
    pagination_class = LimitOffsetPagination

    def get(self, request, format=None):
        queryset = Profile.objects.all()
        paginator = self.pagination_class()
        result_page = paginator.paginate_queryset(queryset, request)
        if result_page is not None:
            serializer = ProfileSerializer(result_page, many=True)
            return paginator.get_paginated_response(serializer.data)
        serializer = ProfileSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ArticleViewSetDetail(APIView):
    queryset = Article.objects.none()
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]

    def get_object(self, pk):
        try:
            return Article.objects.get(pk=pk)
        except:
            raise Http404

    def get(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = ArticleSerializer(queryset)
        return Response(serializer.data)

    def put(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = ArticleSaveSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def patch(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = ArticleSaveSerializer(queryset, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ArticleViewSetList(APIView):
    queryset = Article.objects.none()
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    pagination_class = LimitOffsetPagination

    def get_objects(self):
        tag_id = self.request.query_params.get('tag', None)
        tag_name = self.request.query_params.get('tagname', None)
        author_id = self.request.query_params.get('author', None)
        author_name = self.request.query_params.get('authorname', None)
        if tag_id is not None:
            return Article.objects.filter(tags=tag_id).order_by('-publication_date')
        if tag_name is not None:
            return Article.objects.filter(tags__name=tag_name).order_by('-publication_date')
        if author_id is not None:
            return Article.objects.filter(authors=author_id).order_by('-publication_date')
        if author_name is not None:
            return Article.objects.filter(authors__user__username=author_name).order_by('-publication_date')
        return Article.objects.all().order_by('-publication_date')

    def get(self, request, format=None):
        queryset = self.get_objects()
        paginator = self.pagination_class()
        result_page = paginator.paginate_queryset(queryset, request)
        if result_page is not None:
            serializer = ArticleSerializer(result_page, many=True)
            return paginator.get_paginated_response(serializer.data)
        serializer = ArticleSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ArticleSaveSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CommentViewSetDetail(APIView):
    queryset = Comment.objects.none()
    permission_classes = [IsOwnerOrAdminForCommentViewOrReadOnly]

    def get_object(self, pk):
        try:
            return Comment.objects.get(pk=pk)
        except:
            raise Http404

    def get(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = CommentSerializer(queryset)
        return Response(serializer.data)

    def put(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        self.check_object_permissions(self.request, queryset)
        serializer = CommentSaveSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else: return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        self.check_object_permissions(self.request, queryset)
        queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def patch(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        self.check_object_permissions(self.request, queryset)
        serializer = CommentSaveSerializer(queryset, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CommentViewSetList(APIView):
    queryset = Comment.objects.none()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_objects(self):
        article_id = self.request.query_params.get('article', None)
        if article_id is not None:
            return Comment.objects.filter(article=article_id).order_by('-creation_date')
        else: return Comment.objects.all().order_by('-creation_date')

    def get(self, request, format=None):
        queryset = self.get_objects()
        serializer = CommentSerializer(queryset, many="True")
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CommentSaveSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TagViewSetDetail(APIView):
    queryset = Tag.objects.none()
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]

    def get_object(self, pk):
        try:
            return Tag.objects.get(pk=pk)
        except Tag.DoesNotExist:
            raise Http404

    def get(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = TagSerializer(queryset)
        return Response(serializer.data)

    def put(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = TagSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def patch(self, request,  pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = TagSerializer(queryset, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TagViewSetList(APIView):
    queryset = Tag.objects.none()
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]

    def get(self, format=None):
        queryset = Tag.objects.all()
        serializer = TagSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = TagSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class FileViewSetDetail(APIView):
    queryset = File.objects.none()
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]

    def get_object(self, pk):
        try:
            return File.objects.get(pk=pk)
        except File.DoesNotExist:
            raise Http404

    def get(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = FileSerializer(queryset)
        return Response(serializer.data)

    def put(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = FileSaveSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def patch(self, request,  pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = FileSaveSerializer(queryset, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class FileViewSetList(APIView):
    queryset = File.objects.none()
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    
    def get(self, format=None):
        queryset = File.objects.all()
        serializer = FileSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = FileSaveSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class HardwareRentalSet(viewsets.ModelViewSet):
    permission_classes = (permissions.DjangoModelPermissions,)
    queryset = HardwareRental.objects.all()
    serializer_class = HardwareRentalSerializer

    def get_serializer_class(self):
        if self.request.method in ('POST', 'PUT'):
            return HardwareRentalSaveSerializer
        return self.serializer_class


class HardwareRentalViewSetDetail(APIView):
    queryset = HardwareRental.objects.none()
    permission_classes = (permissions.DjangoModelPermissions,)

    def get_object(self, pk=None):
        try:
            return HardwareRental.objects.get(pk=pk)
        except HardwareRental.DoesNotExist:
            raise Http404

    def get(self, request, pk=None, format=None):
        queryset = self.get_object(pk=pk)
        serializer = HardwareRentalSerializer(queryset)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = HardwareRentalSaveSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def patch(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = HardwareRentalSerializer(queryset, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class HardwareRentalViewSetList(APIView):
    queryset = HardwareRental.objects.none()
    permission_classes = (permissions.DjangoModelPermissions,)

    def get(self, format=None):
        queryset = HardwareRental.objects.all()
        serializer = HardwareRentalSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = HardwareRentalSaveSerializer(data=request.data)
        if serializer.is_valid():
            if serializer.validated_data["hardware"].rentals.filter(return_date__isnull=False).exists():
                return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
            serializer.save()
            pdf = generate_pdf(serializer.validated_data)
            with open('glejt.pdf', 'wb+') as glejt:
                glejt.write(pdf.getbuffer())
                file = FFile(glejt)
                serializer.save().file.save(f'glejt{datetime.datetime}.pdf', file)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class HardwareSet(viewsets.ModelViewSet):
    permission_classes = (permissions.DjangoModelPermissions,)
    queryset = Hardware.objects.all()
    serializer_class = HardwareSerializer
    pagination_class = LimitOffsetPagination

    def get_serializer_class(self):
        if self.request.method in ('POST', 'PUT'):
            return HardwareSaveSerializer
        return self.serializer_class


class HardwareViewSetDetail(APIView):
    queryset = Hardware.objects.none()
    permission_classes = (permissions.DjangoModelPermissions,)

    def get_object(self, pk=None):
        try:
            return Hardware.objects.get(pk=pk)
        except Profile.DoesNotExist:
            raise Http404

    def get(self, request, pk=None, format=None):
        queryset = self.get_object(pk=pk)
        serializer = HardwareSerializer(queryset)
        return Response(serializer.data)

    def put(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = HardwareSaveSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def patch(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = HardwareSerializer(queryset, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class HardwareViewSetList(APIView):
    queryset = Hardware.objects.none()
    permission_classes = (permissions.DjangoModelPermissions,)
    pagination_class = LimitOffsetPagination

    def get(self, request, format=None):
        queryset = Hardware.objects.all()
        paginator = self.pagination_class()
        result_page = paginator.paginate_queryset(queryset, request)
        if result_page is not None:
            serializer = HardwareSerializer(result_page, many=True)
            return paginator.get_paginated_response(serializer.data)
        serializer = HardwareSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = HardwareSaveSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProjectViewSetDetail(APIView):
    queryset = Project.objects.none()
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,)

    def get_object(self, pk):
        try:
            return Project.objects.get(pk=pk)
        except:
            raise Http404

    def get(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = ProjectSerializer(queryset)
        return Response(serializer.data)

    def put(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = ProjectSaveSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else: return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def patch(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = ProjectSaveSerializer(queryset, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProjectViewSetList(APIView):
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,)
    queryset = Project.objects.none()
    pagination_class = LimitOffsetPagination

    def get(self, request, format=None):
        queryset = Project.objects.all().order_by('-id')
        paginator = self.pagination_class()
        result_page = paginator.paginate_queryset(queryset, request)
        if result_page is not None:
            serializer = ProjectSerializer(result_page, many=True)
            return paginator.get_paginated_response(serializer.data)
        serializer = ProjectSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ProjectSaveSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SectionViewSetDetail(APIView):
    queryset = Section.objects.none()
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,)

    def get_object(self, pk=None):
        try:
            return Section.objects.get(pk=pk)
        except Section.DoesNotExist:
            raise Http404

    def get(self, request, pk=None, format=None):
        queryset = self.get_object(pk=pk)
        serializer = SectionSerializer(queryset)
        return Response(serializer.data)

    def put(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = SectionSaveSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def patch(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = SectionSaveSerializer(queryset, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SectionViewSetList(APIView):
    queryset = Section.objects.none()
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,)

    def get(self, format=None):
        queryset = Section.objects.all()
        serializer = SectionSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = SectionSaveSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GalleryViewSetDetail(APIView):
    queryset = Gallery.objects.none()
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,)

    def get_object(self, pk):
        try:
            return Gallery.objects.get(pk=pk)
        except:
            raise Http404

    def get(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = GallerySerializer(queryset)
        return Response(serializer.data)

    def put(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = GallerySerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def patch(self, request,  pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = GallerySerializer(queryset, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GalleryViewSetList(APIView):
    queryset = Gallery.objects.none()
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,)

    def get_objects(self):
        article_id = self.request.query_params.get('article', None)
        if article_id is None:
            return Gallery.objects.all()
        return Gallery.objects.filter(article=article_id)

    def get(self, request, format=None):
        queryset = self.get_objects()
        serializer = GallerySerializer(queryset, many="True")
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = GallerySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SponsorViewSetDetail(APIView):
    queryset = Sponsor.objects.none()
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,)

    def get_object(self, pk):
        try:
            return Sponsor.objects.get(pk=pk)
        except:
            raise Http404

    def get(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = SponsorSerializer(queryset)
        return Response(serializer.data)

    def put(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = SponsorSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def patch(self, request,  pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = SponsorSerializer(queryset, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SponsorViewSetList(APIView):
    queryset = Sponsor.objects.none()
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,)

    def get(self, format=None):
        queryset = Sponsor.objects.all()
        serializer = SponsorSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = SponsorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def generate_pdf(data):
    buffer = io.BytesIO()
    pdf = canvas.Canvas(buffer)
    pdfmetrics.registerFont(TTFont('Verdana', 'RESTApi/templates/verdana.ttf'))
    pdf.setFont('Verdana', 10)
    pdf.drawImage('RESTApi/templates/logo_color.bmp', 40, 720, width=192, height=103)
    pdf.drawString(50, 710, 'Studenckie Koło Naukowe Informatyków „KOD”')
    pdf.drawString(50, 696, 'Politechnika Rzeszowska')
    pdf.drawString(50, 682, 'Katedra Informatyki i Automatyki')
    pdf.drawString(400, 710, f'Rzeszów, {data["rental_date"].date()}')
    pdf.setFont('Verdana', 15)
    pdf.drawCentredString(300, 600, 'Oświadczenie - rewers')
    pdf.setFont('Verdana', 10)
    pdf.drawCentredString(300, 550, 'Ja, niżej podpisany:')
    pdf.drawCentredString(300, 530, f'{data["user"].first_name} {data["user"].last_name}')
    pdf.drawCentredString(300, 510, f'członek SKNI „KOD”, o numerze indeksu {data["user"].profile.index_number}')
    pdf.drawCentredString(300, 490, 'oświadczam, że wypożyczam następujący sprzęt:')
    pdf.drawCentredString(300, 470, f'{data["hardware"].name} o numerze seryjnym {data["hardware"].serial_number}')
    pdf.drawCentredString(300, 450,
                          'którego właścicielem jest Politechnika Rzeszowska, Katedra Informatyki i Automatyki.')
    pdf.drawCentredString(300, 430, f'W razie zgubienia lub uszkodzenia zobowiązuję się do pokrycia kosztów.')
    pdf.drawCentredString(300, 410, f'Urządzenie zwrócę najpóźniej do dnia: {data["return_date"].date()}')
    pdf.showPage()
    pdf.save()
    buffer.seek(0)
    return buffer


class GenericLinkViewSetDetail(APIView):
    queryset = GenericLink.objects.none()
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,)

    def get_object(self, pk=None):
        try:
            return GenericLink.objects.get(pk=pk)
        except Profile.DoesNotExist:
            raise Http404

    def get(self, request, pk=None, format=None):
        queryset = self.get_object(pk=pk)
        serializer = GenericLinkBigSerializer(queryset)
        return Response(serializer.data)

    def put(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = GenericLinkBigSaveSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def patch(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = GenericLinkBigSaveSerializer(queryset, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GenericLinkViewSetList(APIView):
    queryset = GenericLink.objects.none()
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,)
    pagination_class = LimitOffsetPagination

    def get(self, request, format=None):
        queryset = GenericLink.objects.all()
        paginator = self.pagination_class()
        result_page = paginator.paginate_queryset(queryset, request)
        if result_page is not None:
            serializer = GenericLinkBigSerializer(result_page, many=True)
            return paginator.get_paginated_response(serializer.data)
        serializer = GenericLinkBigSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = GenericLinkBigSaveSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class FooterLinkListView(APIView):
    queryset = FooterLink.objects.none()
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,)

    def get(self, request, format=None):
        queryset = FooterLink.objects.all()
        serializer = FooterLinkSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = FooterLinkSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)


class FooterLinkDetailView(APIView):
    queryset = FooterLink.objects.none()
    permission_classes = (permissions.DjangoModelPermissionsOrAnonReadOnly,)

    def get_object(self, pk=None):
        try:
            return FooterLink.objects.get(pk=pk)
        except Profile.DoesNotExist:
            raise Http404

    def get(self, request, pk=None, format=None):
        queryset = self.get_object(pk=pk)
        serializer = FooterLinkSerializer(queryset)
        return Response(serializer.data)

    def put(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = FooterLinkSerializer(queryset, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        queryset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def patch(self, request, pk=None, format=None):
        queryset = self.get_object(pk)
        serializer = FooterLinkSerializer(queryset, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)