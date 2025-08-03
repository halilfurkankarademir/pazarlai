from werkzeug.security import generate_password_hash, check_password_hash
from cloudinary import uploader
import io


def hash_password(password):
    if not password:
        raise ValueError("Password cannot be empty")
    hashed_password = generate_password_hash(password)
    return hashed_password


def check_hashed_password(password, stored_hash):
    if not password or not stored_hash:
        raise ValueError("Password and stored hash cannot be empty")
    return check_password_hash(stored_hash, password)


def upload_image(image_file):
    if not image_file:
        return None

    bytes_io = io.BytesIO()
    image_file.save(bytes_io, format="JPEG")
    bytes_io.seek(0)

    upload_result = uploader.upload(bytes_io)
    return upload_result["secure_url"]
