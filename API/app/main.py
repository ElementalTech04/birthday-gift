from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import auth, birthday

app = FastAPI(title="Birthday API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router)
app.include_router(birthday.router)

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
