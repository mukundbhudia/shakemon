# shakemon-api

Shakemon API - a REST API that given a Pokemon name, returns it's Shakespearian description.

## Prerequisites

- If running locally: Node (v14.x.x) and NPM (v7.x.x) needs to be installed.
- If running in a container: Docker (v20.x.x) & docker-compose (v1.x.x) needs to be installed.

## Run locally

In the project root directory, you can run:

- `npm i` - To install dependences locally (run this first).
- `npm run nm` - Runs the server in the development mode using nodemon. The project will reload if you make edits to the source code.
- `npm start` - runs the server in production mode.
- `npm test` - runs tests.

Open [http://localhost:4000](http://localhost:4000) to view the API in the browser.

## Run containerised

To run in containers, follow the options below running commands in the project root directory. Open [http://localhost:8080](http://localhost:8080) to view the API in the browser.

### Run with Docker

- `docker run -p 8080:4000 -d shakemon` - just using docker.

### Run with Docker Compose

- `docker-compose up` - with docker and docker-compose.
- `docker-compose -f docker-compose.dev.yml up` - in development mode.
- `docker-compose -f docker-compose.test.yml up` - runs tests.

## Improvements to consider

- Caching API results particularly as Shakespeare translator's rate limiting is quite restrictive. Perhaps using Redis or even a database to permanently store a pokemon's description and it's subsequent translation as they are encountered from use of this API.
- Retry logic per each external API call for certain errors (e.g. 4xx/5xx client/server errors).
- Mock API calls in tests.
- Continuous integration to run tests and apply code formatting. Perhaps using GitHub Actions.
