from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def get_prompt(request):
    prompt = request.body.decode("utf-8")
    return Response({"Message":prompt})