from django.urls import path
from .views import pizza_counter_view, noodle_counter_view

urlpatterns = [
    path('pizzaCounter/', pizza_counter_view),
    path('noodleCounter/', noodle_counter_view),
]