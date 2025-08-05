from fastapi import FastAPI
import uvicorn
from ai_services.marketing_description_service.routing import analyze_image_router
from ai_services.tag_generator_service.routing import tag_generator_router
from ai_services.feature_extractor_service.routing import feature_extractor_router
from ai_services.image_generator_service.routing import image_generation_router
from fastapi.middleware.cors import CORSMiddleware
from config.cloudinary_config import init_cloudinary


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(analyze_image_router)
app.include_router(tag_generator_router)
app.include_router(feature_extractor_router)
app.include_router(image_generation_router)

init_cloudinary()


@app.get("/")
def initialize_project():
    return {"message": "BTK-2025 Projesi"}


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8520, reload=True)
