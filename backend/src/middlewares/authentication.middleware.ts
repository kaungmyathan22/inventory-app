import { UnauthorizedException } from '@exceptions/Unauthorized.exception';
import { JwtService } from '@features/authentication/jwt.service';
import { IUser, UserModel } from '@features/users/models/user.model';
import { IAuthJWTPayload } from '@interfaces/jwt.interface';
import { translateMessage } from '@utils/functions';
import { NextFunction, Request, Response } from 'express';
const userModel = UserModel;
export class AuthenticationMiddleware {
  static async loginRequired(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const authorization = request.headers.authorization;
      if (!authorization) {
        return next(new UnauthorizedException());
      }
      const token = authorization.split('Bearer ')[1];
      const payload: IAuthJWTPayload = (await JwtService.verify(
        token,
      )) as unknown as IAuthJWTPayload;
      if (!payload?.userId) {
        return next(new UnauthorizedException());
      }
      const user: IUser = (await userModel
        .findById(payload.userId)
        .select('-password')) as unknown as IUser;
      //@ts-ignore
      if (!user) {
        return next(new UnauthorizedException());
      }
      request.user = user;
      next();
    } catch (error) {
      console.log(error.code);
      if (error.name === 'TokenExpiredError') {
        return next(
          new UnauthorizedException(translateMessage('Jwt token expired')),
        );
      }
      next(error);
    }
  }
}
