import { IsOptional, IsPositive, IsString, Min } from 'class-validator';

export class UpdateProductDTO {
  @IsString()
  @IsOptional()
  name?: string;

  @IsPositive()
  @Min(1)
  @IsOptional()
  price?: string;

  @IsString()
  @IsOptional()
  image?: string;
}
