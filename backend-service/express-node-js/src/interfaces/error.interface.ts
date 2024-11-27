export interface IValidationError {
  field: string;
  error: string;
  message: string;
  value?: string | number | Record<string, unknown> | unknown[];
}

export interface IApiError {
  name: string;
  status: number;
  message: string;
}
