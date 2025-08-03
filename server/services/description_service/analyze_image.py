import io
import os
import re
from dotenv import load_dotenv
from google import genai
from google.genai import types
from PIL import Image

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
    async def analyze_image(image,language):
        load_dotenv()

        image=Image.open(io.BytesIO(image)).convert("RGB")
        byte_io=io.BytesIO()
        image.save(byte_io,format="JPEG")
        byte_io.seek(0)

        client=genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))
        response=client.models.generate_content(
            model="gemini-2.5-pro",
            contents=[types.Part.from_bytes(
                data=byte_io.read(),
                mime_type='image/jpeg'
            ),
               f'You are a highly persuasive ecommerce copywriter. Analyze the uploaded product image carefully and, based on the visual appearance, create a compelling and persuasive marketing text in {language} that promotes the product to potential buyers.'
               'Your description should include imagined or inferred details such as the product’s design, material, texture, color, structure, purpose, quality impression, and aesthetic appeal.'
               'Write the text as if it belongs to a premium brand and aim to evoke desire, highlight benefits, and build an emotional connection with the customer. '
               'Use vivid, sensory language that reflects the visual style of the product, and make sure the tone is warm, professional, and captivating.'
               'Begin with a curiosity-driven hook, describe the key advantages in a smooth flow, and close with a motivating call to action like “discover now” or “add it to your collection.” '
               'Only return the product marketing text without any additional explanations.']

        )

        clean_text=ImageAnalyze._clean_markdown(response.text)

        return {"explanation":clean_text}

