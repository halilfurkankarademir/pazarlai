from services.user_service import UserService


user_service = UserService()


def get_current_user_controller(user_id):
    return user_service.get_current_user(user_id)
