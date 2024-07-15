from django.contrib import admin

from .models import PizzaCounter, NoodleCounter


admin.site.register(PizzaCounter)
admin.site.register(NoodleCounter)

