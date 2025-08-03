import io
import os
from dotenv import load_dotenv
from google import genai
from google.genai import types
from PIL import Image
from utils.helpers import upload_image


class ImageGeneration:
    def __init__(self):
        pass

    @staticmethod
    async def generate_image(image=None):
        load_dotenv()

        image = Image.open(io.BytesIO(image)).convert("RGB")
        byte_io = io.BytesIO()
        image.save(byte_io, format="JPEG")
        byte_io.seek(0)

        client = genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))
        response = client.models.generate_content(
            model="gemini-2.0-flash-preview-image-generation",
            contents=[types.Part.from_bytes(
                data=byte_io.read(),
                mime_type='image/jpeg'
            ),

                f"""Take the uploaded product image and generate 4 distinct, high-quality visuals by changing only the background and environment based on the product's category and real-life use cases.
            Do not alter or modify the product itself in any way—preserve its shape, texture, size, lighting, and colors exactly as in the original image. Focus solely on placing the product into different realistic and contextually appropriate scenes.
            The product must remain clearly visible, in full, and in sharp focus in every scene. Each generated image must feature a unique environment (no duplicates), representing plausible use-case settings for the product. Ensure a natural-looking composition, with realistic lighting, proper perspective, and subtle shadows or reflections consistent with the original product photo.
            Render each scene in high resolution, in a professional product photography style, using natural lighting unless the context demands otherwise."""],
            config=types.GenerateContentConfig(
                response_modalities=['TEXT', 'IMAGE']))
        i = 0
        generated_images = []
        for part in response.candidates[0].content.parts:
            if part.inline_data is not None:
                image = Image.open(io.BytesIO((part.inline_data.data)))
                uploaded_image = upload_image(image)
                generated_images.append(uploaded_image)
                i += 1
            if i == 4:
                break
        return {"images": generated_images}
