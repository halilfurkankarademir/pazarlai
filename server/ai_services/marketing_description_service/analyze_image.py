import io
import os
import re
from dotenv import load_dotenv
from google import genai
from google.genai import types
from PIL import Image
from ai_services.json_loader import pazarlai_prompts 

class ImageAnalyze:
    def __init__(self):
        pass

    @staticmethod
    def _clean_markdown(text):
        text=re.sub(r'\*+','',text)
        text = re.sub(r'^#+\s*', '', text, flags=re.MULTILINE)
        text=text.replace('\\n','\n')
        return text
    
    @staticmethod    
    async def analyze_image(image,language,model):
        load_dotenv()

        image=Image.open(io.BytesIO(image)).convert("RGB")
        byte_io=io.BytesIO()
        image.save(byte_io,format="JPEG")
        byte_io.seek(0)

        marketing_prompt= pazarlai_prompts["marketing_prompt"].replace("[language]",language)
        if model:
            marketing_prompt+=pazarlai_prompts["addition_marketing_prompt"].replace("[model]",model)

        max_attempts=5
        attempts = 0
        
        while attempts < max_attempts:
            try: 
                byte_io.seek(0) 
                print("istek geldi")
                client=genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))
                response=client.models.generate_content(
                    model="gemini-2.5-pro",
                    contents=[types.Part.from_bytes(
                        data=byte_io.read(),
                        mime_type='image/jpeg'
                    ),marketing_prompt])

                clean_text=ImageAnalyze._clean_markdown(response.text)
                print(clean_text)
                return {"explanation":clean_text}
            except Exception as e:
                print(f"hata:{e}")
                attempts+=1

