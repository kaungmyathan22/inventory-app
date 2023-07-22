import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsStrongPassword,
} from 'class-validator';
export class UpdateUserDTO {
  @IsOptional()
  @IsEmail()
  @IsNotEmpty()
  email?: string;
  @IsStrongPassword()
  @IsOptional()
  password?: string;
}
