from pydantic import BaseModel
from typing import Union


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: Union[str, None] = None


class User(BaseModel):
    email: str
    name: Union[str, None] = None
    disabled: Union[bool, None] = None


class UserRequest(User):
    password: str


class UserInDB(User):
    hashed_password: str
