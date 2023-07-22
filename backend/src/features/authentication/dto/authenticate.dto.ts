import { IsEmail, IsString } from 'class-validator';

export class AuthenticateDTO {
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
