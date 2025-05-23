# from fastapi import FastAPI
# from app.api import router

# app = FastAPI()

# app.include_router(router)

# @app.get("/")
# def read_root():
#     return {"message": "Welcome to the Risk Prevention API"}


from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import router

app = FastAPI()

# ✅ Add this block to allow requests from your React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Risk Prevention API"}
