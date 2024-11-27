import express from 'express';

import { ApplicationsRoute } from './routes/applications.route';
import { HealthRoute } from './routes/health.route';

export function registerRoutes(app: express.Application): void {
  new HealthRoute(app);
  new ApplicationsRoute(app);
}
