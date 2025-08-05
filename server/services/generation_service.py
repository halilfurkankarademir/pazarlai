from config.database import SessionLocal
from models.generation_model import Generation


class GenerationService:

    def get_generation_by_user_id(self, user_id):
        db = SessionLocal()
        try:
            generations = db.query(Generation).filter(
                Generation.user_id == user_id
            ).all()
            if not generations:
                return None
            return [g.to_dict() for g in generations]
        finally:
            db.close()

    def get_generation_by_id(self, generation_id):
        db = SessionLocal()
        try:
            generation = db.query(Generation).filter(
                Generation.id == generation_id).first()
            if not generation:
                return None
            return generation.to_dict()
        finally:
            db.close()

    def delete_generation(self, generation_id):
        db = SessionLocal()
        try:
            generation = db.query(Generation).filter(
                Generation.id == generation_id).first()
            if not generation:
                return None
            db.delete(generation)
            db.commit()
            return True
        finally:
            db.close()
