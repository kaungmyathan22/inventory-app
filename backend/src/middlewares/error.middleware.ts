import HttpException from '@exceptions/http.exception';
import { translateMessage } from '@utils/functions';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

function errorMiddleware(
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction,
) {
  if (error.status) {
    return response.status(error.status).json({
      status: error.status,
      message: error.message,
    });
  }
  return response.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    message: translateMessage('Something went wrong'),
    status: httpStatus.INTERNAL_SERVER_ERROR,
  });
}
export default errorMiddleware;
