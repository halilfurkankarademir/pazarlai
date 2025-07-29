from flask import Blueprint, jsonify
from controllers.auth_controller import login_user_controller, register_user_controller, logout_user_controller

auth_routes_bp = Blueprint('auth_routes', __name__, url_prefix='/api/auth')


@auth_routes_bp.route('/login', methods=['POST'])
def login():
    return login_user_controller()


@auth_routes_bp.route('/register', methods=['POST'])
def register():
    return register_user_controller()


@auth_routes_bp.route('/logout', methods=['POST'])
def logout():
    return logout_user_controller()


@auth_routes_bp.route('/test', methods=['GET'])
def test():
    return jsonify({"message": "Auth route is working!"}), 200
