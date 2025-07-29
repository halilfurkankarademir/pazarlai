from werkzeug.security import generate_password_hash, check_password_hash


def hash_password(password):
    if not password:
        raise ValueError("Password cannot be empty")
    hashed_password = generate_password_hash(password)
    return hashed_password


def check_hashed_password(password, stored_hash):
    if not password or not stored_hash:
        raise ValueError("Password and stored hash cannot be empty")
    return check_password_hash(stored_hash, password)
