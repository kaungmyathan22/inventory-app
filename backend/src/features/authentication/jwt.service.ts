import { BadRequestException } from '@exceptions/badRequest.exception';
import { EnvUtils } from '@utils/EnvUtils';
import { translateMessage } from '@utils/functions';
import jsonwebtoken from 'jsonwebtoken';

const secret = EnvUtils.get('JWT_SECRET');
const jwtExpiresIn = EnvUtils.get('JWT_EXPIRES_IN');
const passwordResetLinkExpiresIn = EnvUtils.get(
  'PASSWORD_RESET_LINK_EXPIRES_IN',
);

interface SigninTokenPayload {
  userId: string;
}

export interface PasswordResetTokenPayload {
  code: string;
  resetId: string;
}

export class JwtService {
  static async signLoginToken({ userId }: SigninTokenPayload): Promise<string> {
    return jsonwebtoken.sign({ userId }, secret, { expiresIn: jwtExpiresIn });
  }
  static async signTokenForPasswordReset(
    payload: PasswordResetTokenPayload,
  ): Promise<string> {
    return jsonwebtoken.sign(payload, secret, {
      expiresIn: passwordResetLinkExpiresIn,
    });
  }

  static async verify(token: string) {
    try {
      const payload = jsonwebtoken.verify(token, secret);
      return payload;
    } catch (error) {
      if (error.name === 'JsonWebTokenError') {
        throw new BadRequestException(translateMessage('Invalid token value.'));
      }
      if (error.name === 'TokenExpiredError') {
        throw new BadRequestException(translateMessage('Token has expired.'));
      }
      throw error;
    }
  }
}
