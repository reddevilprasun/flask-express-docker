# Fullstack Application with Docker

This project consists of a **frontend** built with Node.js and Express (TypeScript), and a **backend** built with Flask. Both services are containerized using Docker, and the images are available on Docker Hub.

## Project Structure

```
/frontend         # Node.js Express frontend (TypeScript)
  /src            # Source code for the frontend
  /dist           # Built frontend assets
  Dockerfile      # Docker configuration for frontend service

/backend          # Flask backend
  /app            # Source code for the backend
  Dockerfile      # Docker configuration for backend service

docker-compose.yml # Docker Compose configuration to run both services
```

## Docker Images

Custom Docker images have been created for both the frontend and backend services. These images are publicly available on Docker Hub:

- **Frontend**: `devprasun/express-frontend`
- **Backend**: `devprasun/flask-backend`

## How to Run the Application

### 1. Prerequisites

- Make sure you have Docker and Docker Compose installed on your system.

### 2. Cloning the Repository

Clone the project from GitHub:

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

### 3. Running the Application with Docker Compose

Use the following command to build and run the frontend and backend services using Docker Compose:

```bash
docker-compose up
```

This command will:
- Pull the frontend and backend images from Docker Hub.
- Start both services on the same network.

### 4. Access the Application

- **Frontend**: Navigate to `http://localhost:3000` to access the Node.js Express frontend.
- **Backend**: The Flask backend runs on `http://localhost:5000`, which handles the form submission.

### 5. Stopping the Application

To stop the services, use the following command:

```bash
docker-compose down
```

This will stop and remove the containers but will keep the built images.

