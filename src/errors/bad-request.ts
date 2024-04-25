import { StatusCodes } from "http-status-codes";
import { CustomAPIError } from "./custom-api";

export class BadRequestError extends CustomAPIError {
  statusCode = 0;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
