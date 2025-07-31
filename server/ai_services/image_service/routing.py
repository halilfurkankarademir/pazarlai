from fastapi import APIRouter, File, Query, UploadFile

from ai_services.image_service.image_generator import ImageGeneration

image_generation_router=APIRouter()

@image_generation_router.post("/image-generation")
async def image_analyzation(image:UploadFile=File(...)):

    image=await image.read()
    
    image_analyzation= await ImageGeneration.generate_image(image=image)
    
    return image_analyzation
    

    

    