from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy


def create_app():
    app = Flask(__name__)

    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://user:123@localhost:5432/btk'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db = SQLAlchemy(app)

    class User(db.Model):
        __tablename__ = 'users'
        id = db.Column(db.Integer, primary_key=True)
        name = db.Column(db.String(50), nullable=False)
        email = db.Column(db.String(120), unique=True, nullable=False)
        password = db.Column(db.String(200), nullable=False)
        salt = db.Column(db.String(128), nullable=False)

        def to_dict(self):
            return {
                "id": self.id,
                "name": self.name,
                "email": self.email,
                "password": self.password,
                "salt": self.salt
            }

    with app.app_context():
        db.create_all()

    @app.route('/')
    def index():
        return jsonify({"message": "Welcome to the Flask app!"})

    return app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, port=5000)
