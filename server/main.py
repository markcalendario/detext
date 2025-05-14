from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from configs import Config

app = FastAPI()
config = Config()

app.add_middleware(
  CORSMiddleware,
  allow_origins=[config.CLIENT],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

