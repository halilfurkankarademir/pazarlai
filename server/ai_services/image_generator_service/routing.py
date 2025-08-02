import io
import os
import zipfile
from fastapi import APIRouter, File, HTTPException, Query, UploadFile
from fastapi.responses import StreamingResponse

from ai_services.image_generator_service.image_generator import ImageGeneration

image_generation_router=APIRouter()

@image_generation_router.post("/image-generation")
async def image_analyzation(image:UploadFile=File(...)):

    image=await image.read()
    
    image_analyzation= await ImageGeneration().get_images(image=image)
    return "success"
    """
    OUTPUTS_FOLDER="outputs"

    if not os.path.exists(OUTPUTS_FOLDER):
        raise HTTPException(status_code=404, detail="Görsel klasörü bulunamadı")
    
    # PNG dosyalarını bul
    image_files = [f for f in os.listdir(OUTPUTS_FOLDER) if f.endswith('.png')]
    
    if not image_files:
        raise HTTPException(status_code=404, detail="İndirilecek görsel bulunamadı")
    
    # Memory'de zip oluştur
    zip_buffer = io.BytesIO()
    
    with zipfile.ZipFile(zip_buffer, 'w', zipfile.ZIP_DEFLATED) as zip_file:
        for image_file in image_files:
            file_path = os.path.join(OUTPUTS_FOLDER, image_file)
            zip_file.write(file_path, image_file)
    
    zip_buffer.seek(0)
    
    return StreamingResponse(
        io.BytesIO(zip_buffer.read()),
        media_type="application/zip",
        headers={"Content-Disposition": "attachment; filename=generated_images.zip"}
    )
    """

    #return image_analyzation
    

    

    