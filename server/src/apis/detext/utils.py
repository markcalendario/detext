import torch
import torch.nn.functional as F
from pydantic_settings import BaseSettings
from transformers import AutoTokenizer, AutoModelForSequenceClassification

class DetextPostPayloadModel(BaseSettings):
  text: str


def predict(text):
  model_path = "./model/detext"

  # Load
  tokenizer = AutoTokenizer.from_pretrained(model_path)
  model = AutoModelForSequenceClassification.from_pretrained(model_path)
  model.eval()

  inputs = tokenizer(text, return_tensors="pt", truncation=True, padding=True)

  # Predict
  with torch.no_grad():
    outputs = model(**inputs)
    logits = outputs.logits
    probabilities = F.softmax(logits, dim=-1)
    predicted_class_id = torch.argmax(probabilities, dim=1).item()
    confidence_score = probabilities[0][predicted_class_id].item()

  label = model.config.id2label[predicted_class_id]

  result = {}

  # Output
  if label == "Fraud":
    result["fraud_confidence"] = round(confidence_score)
    result["safe_confidence"] = 100 - result["fraud_confidence"]
  elif label == "Safe":
    result["safe_confidence"] = round(confidence_score)
    result["fraud_confidence"] = 100 - result["safe_confidence"]
    
  return result