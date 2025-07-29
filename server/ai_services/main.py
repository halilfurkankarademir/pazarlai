from fastapi import FastAPI
import uvicorn
from ai_services.description_service.routing import analyze_image_router
from ai_services.tag_service.routing import tag_generator_router
app=FastAPI()

app.include_router(analyze_image_router)
app.include_router(tag_generator_router)
@app.get("/")
def initialize_project():
    return {"message":"BTK-2025 Projesi"}



if __name__=="__main__":  
    uvicorn.run("main:app",host="127.0.0.1",port=8899, reload=True)