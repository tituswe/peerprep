from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def root():
    return "from User API!"
