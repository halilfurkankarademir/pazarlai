from models.user_model import User
from utils.helpers import hash_password, check_hashed_password
from flask_jwt_extended import (
    create_access_token, create_refresh_token,
    set_access_cookies, set_refresh_cookies,
    get_jwt, get_jwt_identity, unset_jwt_cookies
)
from flask import jsonify
from datetime import timedelta

from config.database import SessionLocal


class AuthService:
    def login_user(self, email, password):
        db = SessionLocal()
        try:
            user = db.query(User).filter(User.email == email).first()
            if not user or not check_hashed_password(password, user.password):
                raise ValueError("Invalid email or password")

            access_token = create_access_token(
                identity=user.user_id, expires_delta=timedelta(days=1))
            refresh_token = create_refresh_token(
                identity=user.user_id, expires_delta=timedelta(days=7))

            response = jsonify({
                "status": "success",
                "user": user.to_dict(),
                "message": "Login successful"
            })

            set_access_cookies(response, access_token)
            set_refresh_cookies(response, refresh_token)

            return response
        finally:
            db.close()

    def register_user(self, name, email, password):
        if not name or not email or not password:
            raise ValueError("Name, email, and password are required")

        db = SessionLocal()
        try:
            # Email kontrolü
            if db.query(User).filter(User.email == email).first():
                return None  # Ya da uygun hata döndür

            hashed_password = hash_password(password)
            new_user = User(name=name, email=email, password=hashed_password)

            db.add(new_user)
            db.commit()
            db.refresh(new_user)

            access_token = create_access_token(
                identity=new_user.user_id, expires_delta=timedelta(days=1))
            refresh_token = create_refresh_token(
                identity=new_user.user_id, expires_delta=timedelta(days=7))

            response = jsonify({
                "status": "success",
                "message": "User registered successfully"
            })

            set_access_cookies(response, access_token)
            set_refresh_cookies(response, refresh_token)

            return response
        except Exception as e:
            db.rollback()
            print(f"Error during user registration: {e}")
            return None
        finally:
            db.close()

    def logout_user(self):
        response = jsonify({
            "status": "success",
            "message": "User logged out successfully"
        })
        unset_jwt_cookies(response)
        return response

    def refresh_tokens(self):
        try:
            jwt_data = get_jwt()

            if jwt_data['type'] != 'refresh':
                return jsonify({"status": "error", "message": "Invalid token type"}), 401

            current_user_id = get_jwt_identity()

            new_access_token = create_access_token(
                identity=current_user_id, expires_delta=timedelta(days=1))
            new_refresh_token = create_refresh_token(
                identity=current_user_id, expires_delta=timedelta(days=7), fresh=False)

            return {
                "status": "success",
                "message": "Tokens refreshed successfully",
                "access_token": new_access_token,
                "refresh_token": new_refresh_token
            }, 200

        except Exception as e:
            print(f"Error refreshing tokens: {e}")
            return jsonify({"status": "error", "message": "Token refresh failed"}), 500
