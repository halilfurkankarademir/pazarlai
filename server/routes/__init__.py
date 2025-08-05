from .user_routes import user_routes_bp
from .auth_routes import auth_routes_bp
from .generation_routes import generation_routes_bp

all_routes = [
    user_routes_bp,
    auth_routes_bp,
    generation_routes_bp
]
