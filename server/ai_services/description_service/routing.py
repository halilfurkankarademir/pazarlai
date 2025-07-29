from fastapi import APIRouter, File, Query, UploadFile

from ai_services.description_service.analyze_image import ImageAnalyze


analyze_image_router=APIRouter()

@analyze_image_router.post("/analyze-image")
async def image_analyzation(language:str=Query(default="english"),
                            image:UploadFile=File(...),
                            ):

    image=await image.read()
    
    image_analyzation= await ImageAnalyze.analyze_image(image=image,language=language)
    
    return image_analyzation
    

    

    