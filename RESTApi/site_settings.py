import json

from django.utils import timezone
from django.utils.dateparse import parse_datetime
from dynamic_preferences.registries import global_preferences_registry
from rest_framework import serializers, status
from rest_framework.response import Response
from rest_framework.views import APIView

from RESTApi.custom_permissions import IsAdminOrReadOnly


class HistoryEntrySerializer(serializers.Serializer):
    year = serializers.IntegerField(min_value=1900, max_value=2100)
    title = serializers.CharField(max_length=200)
    text = serializers.CharField(max_length=5000, allow_blank=True)


class SiteSettingsSerializer(serializers.Serializer):
    registration_open = serializers.BooleanField(required=False)
    announcement_enabled = serializers.BooleanField(required=False)
    announcement_text = serializers.CharField(required=False, allow_blank=True, max_length=1000)
    announcement_expires_at = serializers.DateTimeField(required=False, allow_null=True)
    history = HistoryEntrySerializer(many=True, required=False)


KEYS = {
    'registration_open': 'general__registration_open',
    'announcement_enabled': 'general__announcement_enabled',
    'announcement_text': 'general__announcement_text',
}


def read_settings():
    prefs = global_preferences_registry.manager()
    try:
        history = json.loads(prefs['about__history'] or '[]')
    except ValueError:
        history = []
    data = {field: prefs[key] for field, key in KEYS.items()}
    expires_at = parse_datetime(prefs['general__announcement_expires_at'] or '')
    data['announcement_expires_at'] = expires_at.isoformat() if expires_at else None
    data['announcement_visible'] = bool(
        data['announcement_enabled']
        and data['announcement_text'].strip()
        and (expires_at is None or expires_at > timezone.now())
    )
    data['history'] = sorted(history, key=lambda entry: entry.get('year', 0))
    return data


class SiteSettingsView(APIView):
    permission_classes = [IsAdminOrReadOnly]

    def get(self, request, format=None):
        return Response(read_settings())

    def patch(self, request, format=None):
        serializer = SiteSettingsSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        prefs = global_preferences_registry.manager()
        for field, value in serializer.validated_data.items():
            if field == 'history':
                prefs['about__history'] = json.dumps(value, ensure_ascii=False)
            elif field == 'announcement_expires_at':
                prefs['general__announcement_expires_at'] = value.isoformat() if value else ''
            else:
                prefs[KEYS[field]] = value
        return Response(read_settings(), status=status.HTTP_200_OK)
