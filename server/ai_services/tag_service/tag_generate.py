import io
import json
import os
import re
from dotenv import load_dotenv
from google import genai
from google.genai import types
from PIL import Image

class TagGenerator:
    def __init__(self):
        pass
    
    @staticmethod    
    async def generate_tag(text,language):
        load_dotenv()

        client=genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))
        response=client.models.generate_content(
            model="gemini-2.5-pro",
            contents=[
               f"""You are a social media content assistant. 
               Based on the following product description, generate strategic and aesthetically appealing hashtags to maximize engagement on platforms like Instagram, TikTok, and Pinterest. 
               Categorize the hashtags into three groups: (1) Popular and General Hashtags — broadly trending, high-discovery tags related to lifestyle, decor, fashion, or tech; 
               (2) Product-Specific and Style Hashtags — tags that reflect the item’s type, materials, function, and category; 
               and (3) Emotional and Storytelling Hashtags — creative tags that reflect the product’s mood, values, or aspirational lifestyle. Provide at least 5 hashtags per category (minimum 15 total),
               and return the full result in JSON format, like the example below. Then, at the end, generate a single-line combined hashtag string suitable for direct use in a social media caption.
               Product Description Example below
               text:"Introducing the EchoBeam Smart Lantern — a portable, solar-powered LED lantern with ambient light modes, USB-C charging, and weather-resistant design.
               Perfect for outdoor adventures, cozy patio nights, or emergency preparedness, EchoBeam combines eco-friendly innovation with modern aesthetics. 
               output: {{
                    "PopularAndGeneralHashtags": [
                        "#TechGadgets",
                        "#OutdoorGear",
                        "#SmartLiving",
                        "#SustainableDesign",
                        "#ModernLifestyle"
                    ],
                    "ProductSpecificAndStyleHashtags": [
                        "#SmartLantern",
                        "#SolarPowered",
                        "#LEDLighting",
                        "#USBCharging",
                        "#WeatherResistant"
                    ],
                    "EmotionalAndStorytellingHashtags": [
                        "#LightTheMoment",
                        "#AdventureReady",
                        "#CozyVibesOnly",
                        "#EcoInnovation",
                        "#DesignMeetsFunction"
                    ],
                    "CombinedHashtagString": "#TechGadgets #OutdoorGear #SmartLiving #SustainableDesign #ModernLifestyle #SmartLantern #SolarPowered #LEDLighting #USBCharging #WeatherResistant #LightTheMoment #AdventureReady #CozyVibesOnly #EcoInnovation #DesignMeetsFunction"
                    }}
                    Generate all hashtags in the following language:{language}.
                    text:{text}
                    output:
                    """])
        
        response=response.text
        print(response)
        start=response.find('{')
        end=response.rfind('}')+1
        json_str=response[start:end]
        print(json_str)
        return {"tags":json.loads(json_str)}

