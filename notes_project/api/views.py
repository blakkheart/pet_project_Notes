from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from note.models import Note
from api.serializers import NoteSerializer


class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter)
    ordering = ('-updated_at')
