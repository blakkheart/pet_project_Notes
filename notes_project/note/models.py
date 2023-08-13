from django.db import models


class Note(models.Model):
    title = models.CharField(max_length=50, blank=True, null=True)
    text = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)
    image = models.ImageField(upload_to=None, blank=True, null=True)

    def __str__(self) -> str:
        return self.title
