from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "Advanced Exoplanet Observatory API"
    app_version: str = "1.0.0"

    environment: str = "development"
    debug: bool = True

    host: str = "127.0.0.1"
    port: int = 8000

    database_url: str
    secret_key: str
    access_token_expire_minutes: int = 30

    redis_url: str

    model_config = SettingsConfigDict(
        env_file=".env",
        env_prefix="AEO_",
        case_sensitive=False,
    )


settings = Settings()