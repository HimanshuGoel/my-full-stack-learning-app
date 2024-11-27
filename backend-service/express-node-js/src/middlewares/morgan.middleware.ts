import chalk from 'chalk';
import morgan from 'morgan';

export const morganMiddleware = morgan(function (tokens, req, res) {
  return [
    '\n',
    chalk.cyanBright(tokens.method(req, res)),
    chalk.yellowBright(tokens.status(req, res)),
    chalk.red(tokens.url(req, res)),
    chalk.white(req.socket.remoteAddress),
    chalk.green(tokens['response-time'](req, res) + ' ms'),
    '\n'
  ].join(' ');
});
