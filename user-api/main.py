from fastapi import FastAPI
from routes import auth


app = FastAPI()


@app.get("/")
async def root():
    return "from User API!"

app.include_router(auth.router, prefix="/auth", tags=['auth'])
