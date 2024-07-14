from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("pizzaOrNoodles", include("pizzaOrNoodles.urls")),
    path("admin/", admin.site.urls),
]
