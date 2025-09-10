# Rails + React + Docker Template

This repository is a template for building a modern web application with a Ruby on Rails API backend and a React frontend, fully containerized using Docker and Docker Compose. It is designed for rapid development and easy deployment.

## Features
- **Rails API**: Ruby on Rails configured as an API-only backend, using PostgreSQL as the database.
- **React Frontend**: Modern React app (Vite + Bun) for fast development and hot reloading.
- **Nginx Reverse Proxy**: Nginx routes API requests to Rails and all other requests to the React frontend.
- **Live Reload**: Changes in Rails or React code are instantly reflected in the running containers (no rebuild required).
- **Easy Setup**: One command to start the entire stack.

## Getting Started



### Prerequisites
- [Docker](https://www.docker.com/products/docker-desktop) (or [Orbstack](https://orbstack.dev/) as a faster alternative for macOS)
- [Docker Compose](https://docs.docker.com/compose/)

### Bun
This template uses [Bun](https://bun.sh/) as the JavaScript runtime and package manager for the React frontend, instead of npm or yarn. Bun offers faster installs and dev server startup. All relevant commands in the React container use `bun`.

### Usage

1. **Clone this repository:**
   ```sh
   git clone https://github.com/your-username/rails-react-template.git
   cd rails-react-template
   ```

2. **Start the development environment:**
   ```sh
   docker-compose up --build
   ```
   This will start:
   - PostgreSQL database
   - Rails API server (on port 3000)
   - React frontend (on port 5173)
   - Nginx reverse proxy (on port 80)

3. **Access the app:**
   - Frontend: [http://localhost](http://localhost) (served by Nginx, routes `/api` to Rails, everything else to React)
   - Rails API: [http://localhost/api](http://localhost/api)
   - React Dev Server: [http://localhost:5173](http://localhost:5173)
   - Rails Dev Server: [http://localhost:3000](http://localhost:3000)

4. **Live Reload:**
   - Any changes you make in `railsapp/` or `reactapp/` will be reflected instantly in the running containers.

## Project Structure

```
railsapp/   # Rails API backend
reactapp/   # React frontend
nginx.conf  # Nginx configuration
Dockerfile, docker-compose.yml, etc.
```

## Customization
- Update environment variables in `docker-compose.yml` as needed.
- Add your Rails models, controllers, and React components as usual.

## Troubleshooting
- If you see database connection errors, ensure the `db` service is healthy and Rails is using the correct credentials.
- For git errors with subfolders, remove any `.git` folders inside `railsapp/` or `reactapp/` unless you want them as submodules.

## License
MIT
