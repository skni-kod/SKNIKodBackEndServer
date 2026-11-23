import json

from dynamic_preferences.types import BooleanPreference, StringPreference, IntegerPreference, ChoicePreference, \
    LongStringPreference
from dynamic_preferences.preferences import Section
from dynamic_preferences.registries import global_preferences_registry

general = Section('general')
about = Section('about')


@global_preferences_registry.register
class SiteTitle(StringPreference):
    section = general
    name = 'title'
    default = 'Studenckie Koło Naukowe Informatyków \"KOD\"'
    required = False


@global_preferences_registry.register
class RegistrationMode(BooleanPreference):
    section = general
    name = 'registration_mode'
    default = False


@global_preferences_registry.register
class DefaultPaginationCount(IntegerPreference):
    section = general
    name = 'default_items_on_page'
    default = 5
    required = False


@global_preferences_registry.register
class DefaultPageColor(ChoicePreference):
    section = general
    name = 'default_page_color'
    choices = [
        ('primary', 'primary'),
        ('secondary', 'secondary'),
        ('accent', 'accent'),
        ('success', 'success'),
        ('warning', 'warning'),
        ('error', 'error'),
        ('info', 'info'),
    ]
    default = 'primary'


@global_preferences_registry.register
class RegistrationOpen(BooleanPreference):
    section = general
    name = 'registration_open'
    default = True


@global_preferences_registry.register
class AnnouncementEnabled(BooleanPreference):
    section = general
    name = 'announcement_enabled'
    default = False


@global_preferences_registry.register
class AnnouncementText(LongStringPreference):
    section = general
    name = 'announcement_text'
    default = ''
    required = False


DEFAULT_HISTORY = [
    {
        'year': 1997,
        'title': 'Założenie koła naukowego',
        'text': 'Studenckie Koło Naukowe Informatyków „KOD” działa od 1997 r. Założyli je studenci pierwszego roku '
                'uruchomionego wówczas kierunku Informatyka na Wydziale Elektrycznym Politechniki. Opiekunem naukowym '
                'koła został dr inż. Andrzej Kubaszek (Zakład Podstaw Elektrotechniki i Informatyki).',
    },
    {
        'year': 2003,
        'title': 'Zmiana nazwy koła',
        'text': 'Wraz z rozwojem studenckiego ruchu naukowego nazwa koła zmieniała się: najpierw na Koło Naukowe '
                'Informatyków – Programowanie Komputerów, a w 2003 r. Walne Zebranie podjęło uchwałę o zmianie nazwy '
                'na Koło Naukowe Informatyków KOD. Ostatecznie nazwa została zmieniona na Studenckie Koło Naukowe '
                'Informatyków „KOD”.',
    },
    {
        'year': 2008,
        'title': 'Zmiana opiekuna koła',
        'text': 'Od 2008 r. funkcję opiekuna koła pełni dr inż. Bartosz Trybus (Katedra Informatyki i Automatyki).',
    },
]


@global_preferences_registry.register
class History(LongStringPreference):
    section = about
    name = 'history'
    default = json.dumps(DEFAULT_HISTORY, ensure_ascii=False)
    required = False
