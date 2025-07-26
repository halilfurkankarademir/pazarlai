from extensions import db
from sqlalchemy.dialects.postgresql import UUID
import uuid

# User model for the application


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(UUID(as_uuid=True), default=uuid.uuid4,
                        unique=True, nullable=False)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    salt = db.Column(db.String(128), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": str(self.user_id),
            "name": self.name,
            "email": self.email,
            "password": self.password,
            "salt": self.salt
        }
