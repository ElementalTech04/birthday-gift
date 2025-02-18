# Birthday Message Application

A full-stack application for sending personalized birthday messages in multiple languages.

## Project Structure

- `/API` - FastAPI backend service
- `/UI` - Next.js frontend application

## Quick Start with Docker

1. Build both services:
```bash
# Build API
cd API
docker build -t birthday-api .

# Build UI
cd ../UI
docker build -t birthday-ui .
```

2. Run the services:
```bash
# Run API
docker run -p 8000:8000 -d birthday-api

# Run UI
docker run -p 3000:3000 -d birthday-ui
```

The application will be available at `http://localhost:3000`

## Development Setup

### API Setup

1. Navigate to the API directory:
```bash
cd API
```

2. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your settings
```

5. Run the API:
```bash
uvicorn app.main:app --reload
```

### UI Setup

1. Navigate to the UI directory:
```bash
cd UI
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your settings
```

4. Run the UI:
```bash
npm run dev
```

## Features

- Multi-language support for birthday messages
- JWT authentication
- Responsive design
- Docker support
- Environment-based configuration

## Technologies Used

### Backend (API)
- FastAPI
- Python 3.11
- JWT authentication
- Pydantic for validation

### Frontend (UI)
- Next.js 14
- TypeScript
- Tailwind CSS
- Context API for state management

## Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Create a pull request

## License

MIT License
