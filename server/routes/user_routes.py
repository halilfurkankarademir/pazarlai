from flask import Blueprint, jsonify

user_routes_bp = Blueprint('user_routes', __name__, url_prefix='/api/users')


@user_routes_bp.route('/', methods=['GET'])
def get_users():
    # This is a placeholder for the actual user retrieval logic
    return jsonify({"message": "List of users"}), 200


@user_routes_bp.route('/me', methods=['GET'])
def get_user_me():
    # This is a placeholder for the actual user retrieval logic
    return jsonify({"message": "User profile information"}), 200
