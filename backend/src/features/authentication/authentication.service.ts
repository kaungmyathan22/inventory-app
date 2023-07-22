import { BadRequestException } from '@exceptions/badRequest.exception';
import { UserModel } from '@features/users/models/user.model';
import { translateMessage } from '@utils/functions';
import bcrypt from 'bcryptjs';
import { AuthenticateDTO } from './dto/authenticate.dto';
import { JwtService } from './jwt.service';

export class AuthenticationService {
  private userRepository = UserModel;

  constructor() {
    this.bindMethods();
  }

  private bindMethods() {
    this.authenticate = this.authenticate.bind(this);
  }

  public async authenticate({ email, password }: AuthenticateDTO) {
    const user = await this.userRepository
      .findOne({ email })
      .select('+password');
    if (!user) {
      throw new BadRequestException(
        translateMessage('Invalid email / password.'),
      );
    }
    const isPasswordMatch = await bcrypt.compare(
      password,
      user.password as string,
    );
    if (!isPasswordMatch) {
      throw new BadRequestException(
        translateMessage('Invalid email / password.'),
      );
    }
    user.password = undefined;
    return user;
  }

  public async login({ email, password }: AuthenticateDTO) {
    const user = await this.authenticate({ email, password });
    const token = await JwtService.signLoginToken({ userId: user.id });
    return { user, token };
  }
}
