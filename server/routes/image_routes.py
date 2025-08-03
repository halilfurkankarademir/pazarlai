from flask import Blueprint, jsonify, request
from services.image_service.image_generator import ImageGeneration
from services.description_service.analyze_image import ImageAnalyze
from services.tag_service.tag_generate import TagGenerator

import asyncio

image_routes_bp = Blueprint('image_routes', __name__, url_prefix='/api/image')


@image_routes_bp.route('/upload', methods=['POST'])
def upload_image():
    # Placeholder for image upload logic
    return jsonify({"message": "Image uploaded successfully"}), 201


@image_routes_bp.route("/analyze-image", methods=['POST'])
def image_analyzation():
    try:
        # Query parametresini al
        language = request.args.get('language', 'english')

        # Dosyayı al
        if 'image' not in request.files:
            return jsonify({"error": "No image file provided"}), 400

        image_file = request.files['image']
        if image_file.filename == '':
            return jsonify({"error": "No image file selected"}), 400

        # Dosya içeriğini oku
        image_data = image_file.read()

        # Async fonksiyonu çalıştır
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        try:
            result = loop.run_until_complete(
                ImageAnalyze.analyze_image(image=image_data, language=language)
            )
            return jsonify(result)
        finally:
            loop.close()

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@image_routes_bp.route("/image-generation", methods=['POST'])
def image_generation():
    try:
        # Dosyayı al
        if 'image' not in request.files:
            return jsonify({"error": "No image file provided"}), 400

        image_file = request.files['image']
        if image_file.filename == '':
            return jsonify({"error": "No image file selected"}), 400

        # Dosya içeriğini oku
        image_data = image_file.read()

        # Async fonksiyonu çalıştır
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        try:
            result = loop.run_until_complete(
                ImageGeneration.generate_image(image=image_data)
            )
            return jsonify(result)
        finally:
            loop.close()

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@image_routes_bp.route("/image-generation", methods=['GET'])
async def image_generation_get():
    await ImageGeneration.generate_image()
    return jsonify({"message": "Image generated successfully"}), 201


@image_routes_bp.route("/tag-generator", methods=['POST'])
def tag_generation():
    try:
        # Query parametrelerini al
        language = request.args.get('language', 'türkçe')
        text = request.args.get('text')

        if not text:
            return jsonify({"error": "Text parameter is required"}), 400

        # Async fonksiyonu çalıştır
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        try:
            result = loop.run_until_complete(
                TagGenerator.generate_tag(text=text, language=language)
            )
            return jsonify(result)
        finally:
            loop.close()

    except Exception as e:
        return jsonify({"error": str(e)}), 500
