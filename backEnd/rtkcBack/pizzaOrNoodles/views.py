from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import PizzaCounter, NoodleCounter
from .serializers import PizzaCounterSerializer, NoodleCounterSerializer

@api_view(['GET', 'POST'])
def pizza_counter_view(request):
    if request.method == 'GET':
        pizzaCounter, created = PizzaCounter.objects.get_or_create(id=1)
        pizzaSerializer = PizzaCounterSerializer(pizzaCounter)
        return Response(pizzaSerializer.data)
    elif request.method == 'POST':
        pizzaCounter, created = PizzaCounter.objects.get_or_create(id=1)
        pizzaCounter.pizzaCount += 1
        pizzaCounter.save()
        pizzaSerializer = PizzaCounterSerializer(pizzaCounter)
        return Response(pizzaSerializer.data, status=status.HTTP_200_OK)
    
@api_view(['GET', 'POST'])
def noodle_counter_view(request):
    if request.method == 'GET':
        noodleCounter, created = NoodleCounter.objects.get_or_create(id=1)
        noodleSerializer = NoodleCounterSerializer(noodleCounter)
        return Response(noodleSerializer.data)
    elif request.method == 'POST':
        noodleCounter, created = NoodleCounter.objects.get_or_create(id=1)
        noodleCounter.noodleCount += 1
        noodleCounter.save()
        noodleSerializer = NoodleCounterSerializer(noodleCounter)
        return Response(noodleSerializer.data, status=status.HTTP_200_OK)
