import { IsPositive, IsString, Min } from 'class-validator';

export class CreateProductDTO {
  @IsString()
  name: string;

  @IsPositive()
  @Min(1)
  price: number;

  @IsString()
  image: string;
}
