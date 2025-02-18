# Birthday Message API

This is the backend API for the Birthday Message application, built with FastAPI.

## Features

- JWT Authentication
- Birthday message retrieval in multiple languages
- Environment-based configuration
- Docker support

## Prerequisites

- Python 3.11 or higher
- Docker (optional)

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Update the `.env` file with your settings:
```
JWT_SECRET_KEY=your_secret_key
JWT_ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
API_USERNAME=your_username
API_PASSWORD=your_password
```

## Running Locally

```bash
uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000`

## Docker Support

1. Build the Docker image:
```bash
docker build -t birthday-api .
```

2. Run the container:
```bash
docker run -p 8001:8000 -d birthday-api
```

## API Endpoints

- `POST /token` - Get authentication token
- `GET /birthday-message` - Get birthday message in specified language

## Development

The application uses FastAPI for the backend framework and includes:

- JWT token-based authentication
- Environment variable configuration
- Multi-language support for birthday messages
- Error handling and validation

## Testing

Run tests using:
```bash
pytest
```
