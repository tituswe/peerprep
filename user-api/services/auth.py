from datetime import datetime, timedelta
import os
from typing import Union
from fastapi import HTTPException
from fastapi.security import OAuth2PasswordBearer
from passlib.context import CryptContext
from dotenv import load_dotenv
from jose import jwt
from models.auth import UserInDB


load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")
ACCESS_TOKEN_EXPIRE_MINUTES = 60

fake_users_db = {
    "johndoe@example.com": {
        "email": "johndoe@example.com",
        "name": "John Doe",
        "hashed_password": "$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW",
        "disabled": False,
    }
}

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/token")


def verify_token(token: str):
    decoded_jwt = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    email = decoded_jwt.get("email")
    hashed_password = decoded_jwt.get("hashed_password")
    current_user = authenticate_user(
        email=email, password=hashed_password, hashed=True)
    return current_user


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwd_context.hash(password)


def get_user(email: str):
    if email in fake_users_db:
        user_dict = fake_users_db[email]
        return UserInDB(**user_dict)


def add_user(email: str, hashed_password: str, name: str):
    fake_users_db[email] = {
        "email": email,
        "hashed_password": hashed_password,
        "name": name,
        "disabled": False
    }


def authenticate_user(email: str, password: str, hashed: bool = False):
    user = get_user(email=email)
    if not user:
        return False
    elif hashed and not password == user.hashed_password:
        return False
    elif not hashed and not verify_password(password, user.hashed_password):
        return False
    return user


def create_user(name: str, email: str, password: str):
    existing_user = get_user(email=email)
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    hashed_password = pwd_context.hash(password)
    add_user(email=email, hashed_password=hashed_password, name=name)

    return authenticate_user(email=email, password=password)


def create_access_token(email: str, hashed_password: str, expires_delta: Union[timedelta, None] = None):
    to_encode = {}
    to_encode.update({"email": email})
    to_encode.update({"hashed_password": hashed_password})
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt
