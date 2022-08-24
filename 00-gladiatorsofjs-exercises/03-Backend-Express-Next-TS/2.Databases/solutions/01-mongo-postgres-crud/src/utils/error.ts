export class AppError extends Error {
  isCustom: boolean;
  status: number;

  constructor(status: number, message: string, ...args: any) {
    super(...args);

    this.isCustom = true;
    this.message = message;
    this.status = status;

    Error.captureStackTrace(this, AppError);
  }
}
