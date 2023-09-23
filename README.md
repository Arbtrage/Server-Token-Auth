![Server-Token-Auth](https://socialify.git.ci/Arbtrage/Server-Token-Auth/image?language=1&owner=1&name=1&stargazers=1&theme=Light)

# Server Auth Token

A comprehensive authentication system with HTTPS, Swagger documentation, user registration, login, token-based authentication, and session management.

## Features

- User registration with email and password
- User login with email and password
- Token-based authentication using JSON Web Tokens (JWT)
- Refresh token mechanism for enhanced security
- User session management
- Password hashing and salting for data security
- HTTPS support for secure communication
- Swagger API documentation for easy reference

## Installation

You can install this project locally by following these steps:

```bash
# Clone the repository
git clone https://github.com/Arbtrage/Server-Token-Auth.git
```

# Navigate to the project directory
```bash
cd Server-Token-Auth
```

# Install server dependencies
```bash
npm install
```

## Run Locally
```bash
npm run dev
```

## Tech Stack
**Server:**
- Node.js
- Express
- Typescript
- HTTPS for secure communication
- Swagger for API documentation

## Running Tests

To run tests for this project, use the following command:

```bash
npm run test
```

This will execute the test suite and provide you with the test results.

## Usage

1. Register a new user using the `/auth/register` endpoint.
2. Log in with valid credentials using the `/auth/login` endpoint.
3. Obtain access and refresh tokens.
4. Use the access token for authenticated requests.
5. Use the refresh token to refresh the access token when it expires.
6. Log out using the `/auth/logout` endpoint.

## HTTPS Configuration

This project uses HTTPS to ensure secure communication between the client and server. To set up HTTPS, you will need SSL/TLS certificates. Follow these steps:

1. Generate SSL/TLS certificates.
2. Replace the certificate and key files in the server configuration.
3. Update the server to listen on HTTPS.

## Swagger Documentation

This project includes Swagger API documentation to easily understand and interact with the API endpoints. You can access the Swagger documentation at `https://localhost:3000/api-docs` after starting the server.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.