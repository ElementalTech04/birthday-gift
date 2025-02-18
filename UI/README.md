# Birthday Message UI

This is the frontend application for the Birthday Message project, built with Next.js 14 and Tailwind CSS.

## Features

- JWT Authentication
- Multi-language birthday messages
- Responsive design
- Docker support
- Environment-based configuration

## Prerequisites

- Node.js 18 or higher
- npm or yarn
- Docker (optional)

## Setup

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

3. Update the `.env` file with your settings:
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Running Locally

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

## Docker Support

1. Build the Docker image:
```bash
docker build -t birthday-ui .
```

2. Run the container:
```bash
docker run -p 3000:3000 -d birthday-ui
```

## Project Structure

- `/src/app` - Next.js pages and routing
- `/src/components` - Reusable React components
- `/src/contexts` - React context providers
- `/src/styles` - Global styles and Tailwind configuration

## Features

### Authentication
- Login page with username/password
- JWT token management
- Protected routes

### Birthday Messages
- Support for multiple languages
- Responsive message display
- Language selection

## Development

The application is built with:
- Next.js 14 (App Router)
- Tailwind CSS for styling
- TypeScript for type safety
- Context API for state management

## Building for Production

```bash
npm run build
# or
yarn build
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
