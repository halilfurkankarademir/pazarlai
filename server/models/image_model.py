from sqlalchemy import Column, Integer, ForeignKey, LargeBinary
from sqlalchemy.dialects.postgresql import UUID as PG_UUID
from extensions import Base


class Image(Base):
    __tablename__ = 'images'

    id = Column(Integer, primary_key=True)
    image = Column(LargeBinary, nullable=False)
    user_id = Column(PG_UUID(as_uuid=True), ForeignKey(
        'users.user_id'), nullable=False)
    generation_id = Column(Integer, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "image": self.image,
            "user_id": str(self.user_id),
            "generation_id": self.generation_id
        }
