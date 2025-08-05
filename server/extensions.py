from flask_jwt_extended import JWTManager
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()
jwt = JWTManager()
