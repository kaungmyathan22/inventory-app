import { translateMessage } from '@utils/functions';
import httpStatus from 'http-status';
import HttpException from './http.exception';

export class InvalidIdExeption extends HttpException {
  constructor() {
    super(httpStatus.BAD_REQUEST, translateMessage('Invalid id value.'));
  }
}
