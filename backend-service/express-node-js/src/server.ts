import { App } from './app';

// import { setGlobalEnvironment } from './constants/global.constant';
// import { Environment } from './environments/environment';
import { logger } from './utilities/logger.utility';

const PORT = process.env.PORT || 8080;

// const env: Environment = new Environment();
// setGlobalEnvironment(env);

const app = new App();

process.on('unhandledRejection', (reason: Error) => {
  console.log('Unhandled Promise Rejection: reason:', reason.message);
  console.log('reason.stack');
  logger.error('Unhandled Promise Rejection: reason:', reason.message);
  logger.error(reason.stack);
});

export const server = app.express.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});
