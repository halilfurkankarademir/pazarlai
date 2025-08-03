from fastapi import APIRouter, File, Query, UploadFile
from ai_services.feature_extractor_service.feature_extractor import FeatureExtractor

feature_extractor_router=APIRouter()

@feature_extractor_router.post("/extract-feature")
async def feature_extractor(language:str=Query(default="turkish"),
                            image:UploadFile=File(...),
                            model:str=Query(default=" ")
                            ):

    image=await image.read()
    
    features= await FeatureExtractor.extract_feature(image=image,
                                                    language=language,
                                                    model=model)
    
    return features
    

    

    