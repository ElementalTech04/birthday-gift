from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import auth, birthday

app = FastAPI(title="Birthday API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://birthday.symphony-ts.com",
        "http://birthday.symphony-ts.com",  # If you need HTTP during testing
        "http://localhost:3000",  # For local development
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization", "Accept"],
    expose_headers=["Content-Type"],
)

# Include routers
app.include_router(auth.router)
app.include_router(birthday.router)

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
