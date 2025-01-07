import express from 'express';

import { HealthRoute } from './routes/health.route';
import { SubscriptionsRoute } from './routes/subscriptions.route';

export function registerRoutes(app: express.Application): void {
  new HealthRoute(app);
  new SubscriptionsRoute(app);
}
