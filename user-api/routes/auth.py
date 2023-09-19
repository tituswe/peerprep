from datetime import timedelta
from typing import Optional
from fastapi import APIRouter, HTTPException, Request, Response, status

from models.auth import RegisterRequest, LoginRequest, User
from services.auth import authenticate_user, create_access_token, create_user, verify_token, ACCESS_TOKEN_EXPIRE_MINUTES

router = APIRouter()


@router.get("/token", response_model=Optional[User])
async def authorize_user(request: Request, response: Response):
    token = request.cookies.get("access_token")
    if not token:
        raise HTTPException(status_code=401, detail="No user logged in")
    current_user = verify_token(token)
    if not current_user:
        return None
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        email=current_user.email, hashed_password=current_user.hashed_password, expires_delta=access_token_expires
    )
    response.set_cookie(
        key="access_token",
        value=access_token,
        httponly=True,
        max_age=access_token_expires.total_seconds()
    )
    return current_user


@router.post("/register", response_model=User)
async def register_user(request: RegisterRequest, response: Response):
    current_user = create_user(
        name=request.name, email=request.email, password=request.password
    )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        email=current_user.email, hashed_password=current_user.hashed_password, expires_delta=access_token_expires
    )
    response.set_cookie(
        key="access_token",
        value=access_token,
        httponly=True,
        max_age=access_token_expires.total_seconds()
    )
    return current_user


@router.post("/login", response_model=User)
async def login_user(request: LoginRequest, response: Response):
    current_user = authenticate_user(
        email=request.email, password=request.password
    )
    if not current_user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        email=current_user.email, hashed_password=current_user.hashed_password, expires_delta=access_token_expires
    )
    response.set_cookie(
        key="access_token",
        value=access_token,
        httponly=True,
        max_age=access_token_expires.total_seconds()
    )
    return current_user


@router.post("/logout")
async def logout_user(response: Response):
    response.delete_cookie("access_token")
    return None
