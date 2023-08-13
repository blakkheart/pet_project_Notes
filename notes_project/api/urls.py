from django.urls import path, include
from rest_framework import routers

from api.views import NoteViewSet


router_v1 = routers.DefaultRouter()
router_v1.register('notes', NoteViewSet)


urlpatterns = [
    path('v1/', include(router_v1.urls)),

]
