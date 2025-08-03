from datetime import datetime
import io
import json
import os
import re
from dotenv import load_dotenv
from google import genai
from google.genai import types
from PIL import Image
from ai_services.json_loader import pazarlai_prompts 
class TagGenerator:
    def __init__(self):
        pass
    
    @staticmethod    
    async def generate_tag(text,language):
        load_dotenv()
        today=datetime.today().strftime('%B %d, %Y')
        tag_generator_prompt=pazarlai_prompts["tag_generator_prompt"].replace("[language]",language).replace("[text]",text).replace("[today]",today)
        client=genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))        
        max_attempts=5
        attempts = 0
        
        while attempts < max_attempts:
            try:       
                response=client.models.generate_content(
                    model="gemini-2.5-pro",
                    contents=[tag_generator_prompt])
                
                response=response.text
                print(response)
                start=response.find('{')
                end=response.rfind('}')+1
                json_str=response[start:end]
                print(json_str)
                return {"tags":json.loads(json_str)}
            except:
                attempts+=1

