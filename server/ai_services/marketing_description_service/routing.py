from fastapi import APIRouter, File, Query, UploadFile

from ai_services.marketing_description_service.analyze_image import ImageAnalyze


analyze_image_router=APIRouter()

@analyze_image_router.post("/analyze-image")
async def image_analyzation(language:str=Query(default="english"),
                            model:str=Query(default=""),
                            image:UploadFile=File(...),
                            ):

    image=await image.read()
    
    image_analyzation= await ImageAnalyze.analyze_image(image=image,language=language,model=model)
    
    return image_analyzation
    

    

    