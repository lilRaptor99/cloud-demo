# Cloud Demo App

A simple Express.js application that provides a "Hello" greeting endpoint with the user's name.

## Features

- RESTful API built with Express.js
- Name-based greeting endpoint
- HTTP request logging with Morgan
- Docker containerization for easy deployment

## Prerequisites

- Node.js (v14+)
- npm or yarn
- Docker and Docker Compose (for containerized deployment)

## Project Structure

```bash
cloud-demo-app/
├── app.js           # Main application file
├── package.json     # Node.js dependencies and scripts
├── Dockerfile       # Docker image configuration
├── docker-compose.yml  # Docker Compose configuration
├── .dockerignore    # Files to exclude from Docker
└── .gitignore       # Files to exclude from Git
```

## Installation and Running Locally

### Without Docker

1. Clone the repository:

   ```bash
   git clone https://github.com/lilRaptor99/cloud-demo
   cd cloud-demo-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the application:

   ```bash
   npm start
   ```

4. For development with auto-restart:

   ```bash
   npm run dev
   ```

### With Docker

1. Build and start the Docker container:

   ```bash
   docker-compose build
   docker-compose up
   ```

2. To stop the container:

   ```bash
   docker-compose down
   ```

## API Endpoints

### GET /

Returns a welcome message and instructions.

### GET /hello/:firstName

Returns a JSON greeting with the provided name.

Example:

```bash
GET /hello/John
```

Response:

```json
{
  "message": "Hello, John!"
}
```

## Environment Variables

- `PORT`: The port on which the application will run (default: 3000)
- `NODE_ENV`: The environment (development/production)
