from services.generation_service import GenerationService


generation_service = GenerationService()


def get_generation_me_controller(user_id):
    return generation_service.get_generation_by_user_id(user_id)


def get_generation_by_id_controller(generation_id):
    return generation_service.get_generation_by_id(generation_id)


def delete_generation_controller(generation_id):
    return generation_service.delete_generation(generation_id)
