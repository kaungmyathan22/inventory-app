import { CreateUserDTO } from '@features/users/dto/createUser.dto';
import { UserService } from '@features/users/users.service';
import { AuthenticationMiddleware } from '@middlewares/authentication.middleware';
import validationMiddleware from '@middlewares/validation.middleware';
import { translateMessage } from '@utils/functions';
import { NextFunction, Request, Response, Router } from 'express';
import { AuthenticationService } from './authentication.service';
import { AuthenticateDTO } from './dto/authenticate.dto';

export class AuthenticationController {
  private userService = new UserService();
  private authenticationService = new AuthenticationService();
  route = '/v1/auth';
  router = Router();

  constructor() {
    this.bindMethods();
    this.initializeRoutes();
  }

  private bindMethods() {
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.deleteAccount = this.deleteAccount.bind(this);
  }

  private initializeRoutes() {
    this.router
      .post(`/login`, validationMiddleware(AuthenticateDTO), this.login)
      .post(`/register`, validationMiddleware(CreateUserDTO), this.register)
      .post(`/logout`, AuthenticationMiddleware.loginRequired, this.logout)
      .delete(
        `/delete-account`,
        AuthenticationMiddleware.loginRequired,
        this.deleteAccount,
      )
      .get(`/me`, AuthenticationMiddleware.loginRequired, this.me);
  }

  private async login(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const { user, token } = await this.authenticationService.login(
        request.body,
      );

      return response.json({
        user,
        token,
      });
    } catch (error) {
      return next(error);
    }
  }

  private async register(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const user = await this.userService.createUser(request.body);
      user.password = undefined;
      return response.json({ user });
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }

  private async logout(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      return response.json({
        message: translateMessage('Logout Success'),
      });
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }

  private async me(request: Request, response: Response, next: NextFunction) {
    try {
      return response.json({
        user: (request as any).user,
      });
    } catch (error) {
      return next(error);
    }
  }

  private async deleteAccount(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      return response.json({
        //@ts-ignore
        user: request.user,
        message: translateMessage('Successfully delete the user account!'),
      });
    } catch (error) {
      return next(error);
    }
  }
}
