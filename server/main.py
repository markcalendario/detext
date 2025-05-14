from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from configs import Config
from src.apis.detext.route import detext

app = FastAPI()
config = Config()

app.add_middleware(
  CORSMiddleware,
  allow_origins=[config.CLIENT],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

app.include_router(detext, prefix="/detext")