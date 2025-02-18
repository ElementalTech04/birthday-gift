from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from datetime import timedelta
from app.config import get_settings
from app.services.auth_service import (
    authenticate_user,
    create_access_token,
    verify_token,
    invalidate_token
)

router = APIRouter(prefix="/auth", tags=["auth"])
settings = get_settings()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/token")

@router.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    if not authenticate_user(form_data.username, form_data.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token_expires = timedelta(minutes=settings.access_token_expire_minutes)
    access_token = create_access_token(
        data={"sub": form_data.username},
        expires_delta=access_token_expires
    )
    
    return {"access_token": access_token, "token_type": "bearer"}

@router.post("/validate")
async def validate_token(token: str = Depends(oauth2_scheme)):
    payload = verify_token(token)
    return {"valid": True, "username": payload.get("sub")}

@router.post("/logout")
async def logout(token: str = Depends(oauth2_scheme)):
    invalidate_token(token)
    return {"message": "Successfully logged out"}
