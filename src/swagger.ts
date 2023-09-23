import swaggerJSDoc, { Options } from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

// Swagger setup
const swaggerOptions: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Server-Token-Auth',
      version: '1.0.0',
      description: 'API documentation for Auth using Sessions',
      contact: {
        name: 'Sayantan Naskar',
        url: 'https://github.com/Arbtrage',
      },
    },
    servers: [
      {
        url: 'https://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Replace with the path to your route file(s)
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
