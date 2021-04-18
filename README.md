# shakemon-api

Shakemon API, a REST API that given a Pokemon name, returns it's Shakespearian description.

## Prerequisites

- If running locally: Node v14.x.x and NPM v6.x.x
- If running in a container: Docker & docker compose
- If running in dev mode, a `.env` file in the project directory is needed with the key=val of `NODE_ENV=dev` set.

## Run locally

In the project directory, you can run:

- `npm run nm` - Runs the server in the development mode using nodemon. The project will reload if you make edits to the source code.
- `npm start` - runs the server in production mode.

Open [http://localhost:4000](http://localhost:4000) to view the API in the browser.

## Run containerised

To run in containers, follow the options below. Open [http://localhost:8080](http://localhost:8080) to view the API in the browser.

### Run with Docker

- `docker run -p 8080:4000 -d shakemon` - just using docker.

### Run with Docker Compose

- `docker-compose up` - with docker and docker-compose.
- `docker-compose --env-file .env -f docker-compose.dev.yml up` - in development mode.
- `docker-compose --env-file .env -f docker-compose.test.yml up` - runs tests.
