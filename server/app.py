from flask import Flask
from routes import all_routes
from config.cors import init_cors
from config.database import init_db
from config.jwt import init_jwt


def create_app():
    app = Flask(__name__)

    init_cors(app)
    init_db()
    init_jwt(app)

    for route in all_routes:
        app.register_blueprint(route)

    return app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, port=5000, host='localhost')
