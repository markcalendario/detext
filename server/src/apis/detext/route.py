from fastapi import APIRouter
from src.apis.detext.utils import DetextPostPayloadModel, predict

detext = APIRouter()

@detext.post("/")
def handle_detext_post(payload: DetextPostPayloadModel):
  text = payload.text
  prediction = predict(text)

  return {
    "success": True,
    "message": "Success analyzing text.",
    "data": prediction
  }