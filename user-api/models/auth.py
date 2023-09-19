from pydantic import BaseModel
from typing import Union


class LoginRequest(BaseModel):
    email: str
    password: str


class RegisterRequest(LoginRequest):
    name: str


class User(BaseModel):
    email: str
    name: Union[str, None] = None
    disabled: Union[bool, None] = None


class UserInDB(User):
    hashed_password: str
