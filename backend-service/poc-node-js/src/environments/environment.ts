import * as fs from 'fs';
import * as path from 'path';
import { config as configDotenv } from 'dotenv';

import { EnvironmentFile, Environments } from '../constants/environment.constant';
import IEnvironment from '../interfaces/environment.interface';

export class Environment implements IEnvironment {
  public port: number;
  public dbURL: string;

  constructor(NODE_ENV?: string) {
    const env: string = NODE_ENV || process.env.NODE_ENV || Environments.LOCAL;
    const port: string | undefined | number = process.env.PORT || 8080;

    this.setEnvironment(env);
    this.port = Number(port);
    this.dbURL = process.env.DB_URL || 'NOT PROVIDED';
  }

  public getCurrentEnvironment(): string {
    const environment = process.env.NODE_ENV || Environments.LOCAL;

    switch (environment) {
      case Environments.PRODUCTION:
        return Environments.PRODUCTION;
      case Environments.LOCAL:
      default:
        return Environments.LOCAL;
    }
  }

  public setEnvironment(env: string): void {
    let envPath: string;
    const rootdir: string = path.resolve(__dirname, '../../');

    switch (env) {
      case Environments.LOCAL:
        envPath = path.resolve(rootdir, EnvironmentFile.LOCAL);
        break;
      case Environments.PRODUCTION:
        envPath = path.resolve(rootdir, EnvironmentFile.PRODUCTION);
        break;
      default:
        envPath = path.resolve(rootdir, EnvironmentFile.LOCAL);
    }
    if (!fs.existsSync(envPath)) {
      throw new Error('.env file is missing in root directory');
    }
    configDotenv({ path: envPath });
  }

  public isLocalEnvironment(): boolean {
    return this.getCurrentEnvironment() === Environments.LOCAL;
  }

  public isProductionEnvironment(): boolean {
    return this.getCurrentEnvironment() === Environments.PRODUCTION;
  }
}
