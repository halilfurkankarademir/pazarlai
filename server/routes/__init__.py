from .user_routes import user_routes_bp
from .auth_routes import auth_routes_bp
from .image_routes import image_routes_bp


all_routes = [
    user_routes_bp,
    auth_routes_bp,
    image_routes_bp
]
