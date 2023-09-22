import express from 'express';
import authRoute from './authRoute';

const base='/api/v1'

export function setupRoutes(app: express.Application) {
    app.use(`${base}`,authRoute);
    // app.use(`${base}`,projectRoute);
  }