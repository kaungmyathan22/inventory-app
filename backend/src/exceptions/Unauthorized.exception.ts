import { translateMessage } from '@utils/functions';
import httpStatus from 'http-status';
import HttpException from './http.exception';

export class UnauthorizedException extends HttpException {
  constructor(message?: string) {
    super(httpStatus.UNAUTHORIZED, message || translateMessage('Unauthorized'));
  }
}
