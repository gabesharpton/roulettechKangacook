from django.db import models

class PizzaCounter(models.Model):
    pizzaCount = models.IntegerField(default=0)

class NoodleCounter(models.Model):
    noodleCount = models.IntegerField(default=0)