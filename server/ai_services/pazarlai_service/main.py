import uvicorn
from fastapi import FastAPI

from ai_services.pazarlai_service.pazarlai import pazarlai_router

app = FastAPI()

app.include_router(pazarlai_router)

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8050, reload=True)