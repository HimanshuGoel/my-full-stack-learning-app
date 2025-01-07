import express from 'express';

import { SubscriptionsRoute } from './routes/subscriptions.route';
import { HealthRoute } from './routes/health.route';

export function registerRoutes(app: express.Application): void {
  new HealthRoute(app);
  new SubscriptionsRoute(app);
}
