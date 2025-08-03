from extensions import db
from sqlalchemy.dialects.postgresql import UUID, JSONB


class Generation(db.Model):
    __tablename__ = 'generations'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(UUID(as_uuid=True), db.ForeignKey(
        'users.user_id'), nullable=False)
    data = db.Column(JSONB, nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": str(self.user_id),
            "title": self.title,
            "description": self.description,
            "category": self.category,
            "price_suggestion": str(self.price_suggestion) if self.price_suggestion else None,
            "created_at": self.created_at.isoformat() if self.created_at else None
        }
