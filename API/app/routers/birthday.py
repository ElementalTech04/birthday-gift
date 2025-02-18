from fastapi import APIRouter, Depends
from app.services.birthday_service import get_birthday_message
from app.routers.auth import oauth2_scheme

router = APIRouter(prefix="/birthday-message", tags=["birthday"])

@router.get("")
async def get_message(
    language: str,
    token: str = Depends(oauth2_scheme)
):
    """
    Get birthday message for the specified language
    """
    return await get_birthday_message(language)
