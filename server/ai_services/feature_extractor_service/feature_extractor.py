from datetime import datetime
import io
import os
import re
import time
from dotenv import load_dotenv
from google import genai
from google.genai import types
from PIL import Image
import json
from ai_services.json_loader import pazarlai_prompts 
class FeatureExtractor:
    def __init__(self):
        pass
    
    @staticmethod    
    async def extract_feature(image,language,model):
        load_dotenv()

        image=Image.open(io.BytesIO(image)).convert("RGB")
        byte_io=io.BytesIO()
        image.save(byte_io,format="JPEG")
        byte_io.seek(0)
        
        max_attempts=5
        attempts = 0
        
        while attempts < max_attempts:     
            try:
                client=genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))
                
                feature_extractor_prompt = pazarlai_prompts["feature_extractor_prompt"]

                feature_extractor_prompt=feature_extractor_prompt.replace("[language]",language)
                today=datetime.today().strftime('%B %d, %Y')

                feature_extractor_prompt=feature_extractor_prompt.replace("[today]",today)
                            
                if model:
                    feature_extractor_prompt += pazarlai_prompts["addition_model_prompt"].replace("[model]",model)

                response=client.models.generate_content(
                    model="gemini-2.5-pro",
                    contents=[types.Part.from_bytes(
                        data=byte_io.read(),
                        mime_type='image/jpeg'
                    ), feature_extractor_prompt])
                response=response.text
                print(response)
                start=response.find('{')
                end=response.rfind('}')+1
                json_str=response[start:end]
                return {"features":json.loads(json_str)}
            except Exception as e:
                attempts+=1
                time.sleep(2)
                print(e)
                print("deneme")

