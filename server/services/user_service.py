from models.user_model import User
from config.database import SessionLocal


class UserService:
    def get_current_user(self, user_id):
        db = SessionLocal()
        try:
            user = db.query(User).filter(User.user_id == user_id).first()
            if not user:
                return None
            return user.to_dict()
        finally:
            db.close()
