from flask import Flask, jsonify
from extensions import db


def create_app():
    app = Flask(__name__)

    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://user:123@localhost:5432/btk'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    # Import models to ensure they are registered with SQLAlchemy
    import models

    with app.app_context():
        db.create_all()

    @app.route('/')
    def index():
        return jsonify({"message": "Welcome to the Flask app!"})

    return app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, port=5000)
