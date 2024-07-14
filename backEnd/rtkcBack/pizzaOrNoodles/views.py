from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, do you like pizza or noodles more?")
