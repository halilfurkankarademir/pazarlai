import io
import os
import re
import time
from dotenv import load_dotenv
from google import genai
from google.genai import types
from PIL import Image
import json
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
        
        
        while 1:
            try:
                client=genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))
                
                prompt = f"""
                            Analyze the object shown in the uploaded image:

                            1. First, identify what the object is in general (e.g., monitor, desk lamp, smartphone, etc.).

                            2. If the object is a technological product (e.g., phone, tablet, headphones, monitor, computer, smartwatch, etc.):
                                - Try to determine its brand and model based on visual cues.
                                - If the user has provided brand and model information (e.g., "Samsung Odyssey G5"), use this as the primary reference.
                                - Search the internet to retrieve detailed technical specifications for the product.
                                - Present the specifications using clear, structured technical tags (e.g., screen_size: 27 inches, panel_type: IPS, resolution: 2560x1440).

                            3. If the object is not a technological product (e.g., home decor, furniture, accessories):
                                - Identify general attributes such as material type, color, estimated dimensions, style (modern, rustic, minimalist, etc.), and usage context.

                            4. For each feature listed, indicate the level of confidence:
                                - "definite": Clearly and confidently identified
                                - "estimated": Based on visual estimation or assumptions
                                - "mixed": A combination of both definite and estimated information

                            Finally, output all results in the following **JSON format**:

                            {{
                                "category": "",           // e.g., "technological product", "decorative item"
                                "product_type": "",       // e.g., "monitor", "desk lamp"
                                "brand_model": "",        // brand and model name (if available)
                                "features": [
                                    {{"feature_tag:"", 
                                     "value":""}}
                                    {{"feature_tag:"", 
                                     "value":""}}
                                ],
                                "information_confidence": "definite" | "estimated" | "mixed"
                            }}

                            Note: If the model is specified and recognizable, prioritize using that model for internet-based technical specification retrieval.

                            Generate all content in {language}.
                            """

                if model:
                    prompt += f"\nThe user has provided the model: '{model}'. If the brand is missing, identify it and complete the 'brand_model' field. Use this model name to search the internet for accurate specifications and complete the JSON output accordingly."
                response=client.models.generate_content(
                    model="gemini-2.5-pro",
                    contents=[types.Part.from_bytes(
                        data=byte_io.read(),
                        mime_type='image/jpeg'
                    ), prompt])
                response=response.text
                print(response)
                start=response.find('{')
                end=response.rfind('}')+1
                json_str=response[start:end]
                return {"features":json.loads(json_str)}
            except Exception as e:
                time.sleep(5)
                print(e)
                print("deneme")

