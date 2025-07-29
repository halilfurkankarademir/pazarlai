from extensions import db
from sqlalchemy.dialects.postgresql import UUID


class Image(db.Model):
    __tablename__ = 'images'
    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.LargeBinary, nullable=False)
    user_id = db.Column(UUID(as_uuid=True), db.ForeignKey(
        'users.user_id'), nullable=False)
    generation_id = db.Column(db.Integer, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "image": self.image,
            "user_id": str(self.user_id),
            "generation_id": self.generation_id
        }
