from fastapi import APIRouter, File, Query, UploadFile
from ai_services.tag_generator_service.tag_generate import TagGenerator
tag_generator_router=APIRouter()

@tag_generator_router.post("/tag-generator")

async def tag_generation(language:str=Query(default="türkçe"),
                            text:str=Query(...),
                            ):

    
    tags= await TagGenerator.generate_tag(text=text,language=language)
    
    return tags
    

    

    