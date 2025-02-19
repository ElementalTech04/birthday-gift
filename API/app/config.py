from functools import lru_cache
from pydantic_settings import BaseSettings
from typing import Optional
import os

def read_secret(secret_name: str, default: Optional[str] = None) -> Optional[str]:
    secret_path = f"/run/secrets/{secret_name}"
    if os.path.exists(secret_path):
        with open(secret_path, 'r') as f:
            return f.read().strip()
    return os.getenv(secret_name, default)

class Settings(BaseSettings):
    # JWT Settings
    jwt_secret_key: str = ""
    jwt_algorithm: str = "HS256"
    access_token_expire_minutes: int = 30

    # API Credentials
    api_username: str = ""
    api_password: str = ""

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        # Override with Docker secrets if available
        self.jwt_secret_key = read_secret('birthday_jwt_secret', self.jwt_secret_key)
        self.api_username = read_secret('birthday_api_username', self.api_username)
        self.api_password = read_secret('birthday_api_password', self.api_password)

    class Config:
        env_file = ".env"

@lru_cache()
def get_settings() -> Settings:
    return Settings()
