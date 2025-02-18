import json
from pathlib import Path
from fastapi import HTTPException, status

# Load birthday messages from JSON file
data_dir = Path(__file__).parent.parent / "data"
with open(data_dir / "birthday_messages.json", "r", encoding="utf-8") as f:
    BIRTHDAY_MESSAGES = json.load(f)

async def get_birthday_message(language: str) -> dict:
    """
    Get birthday message for the specified language
    """
    if language not in BIRTHDAY_MESSAGES:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"No message found for language: {language}"
        )
    
    return {
        "message": BIRTHDAY_MESSAGES[language]
    }
