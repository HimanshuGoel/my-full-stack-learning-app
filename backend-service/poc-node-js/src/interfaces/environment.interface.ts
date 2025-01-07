interface IEnvironment {
  port: number;
  dbURL: string;

  setEnvironment(env: string): void;
  getCurrentEnvironment(): string;
  isLocalEnvironment(): boolean;
  isProductionEnvironment(): boolean;
}

export default IEnvironment;
