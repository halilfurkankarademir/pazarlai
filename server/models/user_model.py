from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.dialects.postgresql import UUID as PG_UUID
from extensions import Base
import uuid
from datetime import datetime


class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    user_id = Column(PG_UUID(as_uuid=True), default=uuid.uuid4,
                     unique=True, nullable=False)
    name = Column(String(50), nullable=False)
    email = Column(String(120), unique=True, nullable=False)
    password = Column(String(200), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            "user_id": str(self.user_id),
            "name": self.name,
            "email": self.email,
        }
