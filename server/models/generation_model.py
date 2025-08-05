from sqlalchemy import Column, Integer, DateTime, ForeignKey, func
from sqlalchemy.dialects.postgresql import UUID as PG_UUID, JSONB
from extensions import Base


class Generation(Base):
    __tablename__ = 'generations'

    id = Column(Integer, primary_key=True)
    user_id = Column(PG_UUID(as_uuid=True), ForeignKey(
        'users.user_id'), nullable=False)
    data = Column(JSONB, nullable=False)
    created_at = Column(DateTime, default=func.current_timestamp())

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": str(self.user_id),
            "data": self.data,
            "created_at": self.created_at.isoformat() if self.created_at else None
        }
