import { Injectable, InjectionToken, inject } from '@angular/core';
import { LoggerProvider } from './example-logger.service';

export enum LogLevel {
  NEVER = Number.MAX_SAFE_INTEGER,

  TRACE = 0,
  DEBUG = 1,
  INFO = 2,
  WARNING = 3,
  ERROR = 4,
  FATAL = 5
}

export const MIN_LOG_LEVEL = new InjectionToken<LogLevel>('Minimum log level');

export const LOGGER_PROVIDERS = new InjectionToken<LoggerProvider[]>('Providers for the logger');

@Injectable({ providedIn: 'root' })
export class LoggerService {
  readonly #minLogLevel = inject(MIN_LOG_LEVEL) ?? LogLevel.NEVER;
  readonly #providers = inject(LOGGER_PROVIDERS) ?? [];

  #canLog(logLevel: LogLevel): boolean {
    return logLevel >= this.#minLogLevel;
  }

  info(template: string, ...optionalParams: any[]): void {
    if (!this.#canLog(LogLevel.INFO)) return;
    this.#providers.forEach((provider) => provider.info(template, ...optionalParams));
  }

  warning(template: string, ...optionalParams: any[]): void {
    if (!this.#canLog(LogLevel.WARNING)) return;
    this.#providers.forEach((provider) => provider.warning(template, ...optionalParams));
  }

  error(template: string, ...optionalParams: any[]): void {
    if (!this.#canLog(LogLevel.ERROR)) return;
    this.#providers.forEach((provider) => provider.error(template, ...optionalParams));
  }
}
