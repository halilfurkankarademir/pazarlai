import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from ai_services.pazarlai_service.pazarlai import pazarlai_router

pazarlai_app = FastAPI()
pazarlai_app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
pazarlai_app.include_router(pazarlai_router)

if __name__ == "__main__":
    uvicorn.run("routing:app", host="127.0.0.1", port=8050, reload=True)

