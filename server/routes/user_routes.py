from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from controllers.user_controller import get_current_user_controller

user_routes_bp = Blueprint('user_routes', __name__, url_prefix='/api/users')


@user_routes_bp.route('/me', methods=['GET'])
@jwt_required()
def get_user_me():
    user_id = get_jwt_identity()
    return get_current_user_controller(user_id), 200
