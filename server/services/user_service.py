from models.user_model import User


class UserService:
    def get_current_user(self, user_id):
        user = User.query.filter_by(user_id=user_id).first()
        if not user:
            return None
        return user.to_dict()
