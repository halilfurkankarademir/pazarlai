from flask import request, jsonify
from services.auth_service import AuthService

auth_service = AuthService()


def login_user_controller():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    try:
        response = auth_service.login_user(email, password)
        return response, 200
    except ValueError as e:
        return jsonify({"status": "error", "message": str(e)}), 401


def register_user_controller():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    try:
        response = auth_service.register_user(name, email, password)
        return response, 201
    except ValueError as e:
        return {"status": "error", "message": str(e)}, 400
    except Exception as e:
        return {"status": "error", "message": "Registration failed"}, 500


def logout_user_controller():
    try:
        response = auth_service.logout_user()
        return response, 200
    except Exception as e:
        return {"status": "error", "message": "Logout failed"}, 500
