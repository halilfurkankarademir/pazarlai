import time

import aiohttp
import asyncio
from typing import Dict, Any

import uvicorn
from fastapi import APIRouter, FastAPI, File, Query, UploadFile


class Pazarlai:
    def __init__(self):
        self.base_url = "http://127.0.0.1:8520"
        self.session = None

    async def __aenter__(self):
        self.session = aiohttp.ClientSession()
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self.session:
            await self.session.close()

    async def _call_description_and_tag_service_api(self, image_bytes: bytes, language: str,model:str) -> dict:
        marketing_content_and_tags = {}

        data = aiohttp.FormData()
        data.add_field('image', image_bytes, filename='image.jpg', content_type='image/jpeg')

        async with self.session.post(
                f"{self.base_url}/analyze-image",
                data=data,
                params={"language": language, "model":model}
        ) as response:
            response_data = await response.json()
            explanation = response_data.get("explanation")
            marketing_content_and_tags.update({"marketing_content": explanation})

        async with self.session.post(
                f"{self.base_url}/tag-generator",
                params={"language": language, "text": explanation}
        ) as response:
            response_data = await response.json()
            tags = response_data.get("tags", {}).get("CombinedHashtagString")
            marketing_content_and_tags.update({"tags": tags})

        return marketing_content_and_tags

    async def _call_extract_feature_service_api(self, image_bytes: bytes, language: str, model: str)->dict:
        data = aiohttp.FormData()
        data.add_field('image', image_bytes, filename='image.jpg', content_type='image/jpeg')

        async with self.session.post(
                f"{self.base_url}/extract-feature",
                data=data,
                params={"language": language, "model": model}
        ) as response:
            response_data = await response.json()

        return {"product_features": response_data.get("features")}

    async def _call_image_generation_service_api(self, image_bytes: bytes) -> dict:
        data = aiohttp.FormData()
        data.add_field('image', image_bytes, filename='image.jpg', content_type='image/jpeg')

        async with self.session.post(
                f"{self.base_url}/image-generation",
                data=data,
        ) as response:
            response_data=await response.json()

        return {"images":response_data}
            # content_type = response.headers.get('Content-Type', '')
            # if response.status == 200 and 'application/zip' in content_type:
            #     return await response.read()
            # else:
            #     raise ValueError("ZIP dosyası oluşturulamadı")

    async def process_all_service(self, image_bytes: bytes, language: str, model: str):
        tasks = [
            self._call_description_and_tag_service_api(image_bytes=image_bytes, language=language,model=model),
            self._call_extract_feature_service_api(image_bytes=image_bytes, language=language, model=model),
            self._call_image_generation_service_api(image_bytes=image_bytes)
        ]

        results = await asyncio.gather(*tasks, return_exceptions=True)

        return {
            "marketing_data": results[0],
            "features": results[1],
            "generated_images": results[2]
        }


pazarlai_router = APIRouter()


@pazarlai_router.post("/pazarlai")
async def pazarlai_func(language: str = Query(default="english"),
                        model: str = Query(default=" "),
                        image: UploadFile = File(...)):
    image = await image.read()

    for attempt in range(3):
        try:
            async with Pazarlai() as p:
                result = await p.process_all_service(
                    language=language,
                    model=model,
                    image_bytes=image
                )

                return result
        except:
            print(f"başarısız {attempt}")
            time.sleep(2**attempt)





