import io
import os
from dotenv import load_dotenv
from google import genai
from google.genai import types
from PIL import Image
from ai_services.json_loader import pazarlai_prompts
#from cloudinary import uploader

class ImageGeneration:
    def __init__(self):
        pass

    def save_image_to_disk(self, image, filename: str, folder="outputs"):
        os.makedirs(folder, exist_ok=True)
        path = os.path.join(folder, filename)
        image.save(path, format="PNG")
        return path

 
 
 
    def upload_image(self,image_file):
        if not image_file:
            return None
    
        bytes_io = io.BytesIO()
        image_file.save(bytes_io, format="JPEG")
        bytes_io.seek(0)
    
        upload_result = uploader.upload(bytes_io)
        return upload_result["secure_url"]
    

       
    async def generate_image(self,image):
        load_dotenv()

        image_generator_prompt=pazarlai_prompts["image_generator_prompt"]

        image=Image.open(io.BytesIO(image)).convert("RGB")
        byte_io=io.BytesIO()
        image.save(byte_io,format="JPEG")
        byte_io.seek(0)

        client=genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))
        response=client.models.generate_content(
            model="gemini-2.0-flash-preview-image-generation",
            contents=[types.Part.from_bytes(
                data=byte_io.read(),
                mime_type='image/jpeg'
            ),image_generator_prompt],
                 config=types.GenerateContentConfig(
      response_modalities=['TEXT','IMAGE']))
        return response
        

    async def get_images(self, image):
        max_attempts=5
        attempts = 0
        
        while attempts < max_attempts:             
            try:
                response = await self.generate_image(image=image)             
                generated_count = 0
                generated_images = []
                # Response'dan görselleri çıkar ve kaydet             
                for part in response.candidates[0].content.parts:                 
                    if part.inline_data is not None:                     
                        generated_image = Image.open(io.BytesIO(part.inline_data.data))                     
                        filename = f"generated_{generated_count + 1}.png"                       
                        self.save_image_to_disk(generated_image, filename)
                        image = Image.open(io.BytesIO((part.inline_data.data)))
                        #uploaded_image = self.upload_image(image)
                        #generated_images.append(uploaded_image)
                        #generated_images.append("")                       
                        generated_count += 1                 
                    if generated_count==4:
                        return {"images":generated_images}
                # 4 görsel oluşturulduysa başarılı
                if generated_count >= 4:                     
                    continue
                    
                # Yetersizse bir sonraki denemeye geç
                attempts += 1
                print(f"Deneme {attempts}: {generated_count}/4 görsel oluşturuldu")
                
            except Exception as e:
                print(f"Hata oluştu: {e}")
                attempts += 1
                
            