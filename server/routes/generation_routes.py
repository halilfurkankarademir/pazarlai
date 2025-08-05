from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from controllers.generation_controller import get_generation_me_controller, get_generation_by_id_controller, delete_generation_controller

generation_routes_bp = Blueprint(
    'generation_routes', __name__, url_prefix='/api/generations')


@generation_routes_bp.route('/me', methods=['GET'])
@jwt_required()
def get_generation_me():
    user_id = get_jwt_identity()
    return get_generation_me_controller(user_id), 200


@generation_routes_bp.route('/<int:generation_id>', methods=['GET'])
def get_generation(generation_id):
    if not generation_id:
        return jsonify({"message": "Generation ID is required"}), 400
    return get_generation_by_id_controller(generation_id), 200


@generation_routes_bp.route('/<int:generation_id>', methods=['DELETE'])
def delete_generation(generation_id):
    if not generation_id:
        return jsonify({"message": "Generation ID is required"}), 400
    deleted = delete_generation_controller(generation_id)
    if not deleted:
        return jsonify({"message": "Generation not found"}), 404
    return jsonify({"message": "Generation deleted"}), 200
