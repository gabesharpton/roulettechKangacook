from rest_framework import serializers
from .models import PizzaCounter, NoodleCounter

class PizzaCounterSerializer(serializers.ModelSerializer):
    class Meta:
        model = PizzaCounter
        fields = ['id', 'pizzaCount']
class NoodleCounterSerializer(serializers.ModelSerializer):
    class Meta:
        model = NoodleCounter
        fields = ['id', 'noodleCount']