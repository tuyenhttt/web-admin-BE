import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty({ message: 'Email is not empty' })
  email: string;

  @IsNotEmpty({ message: 'Password is not empty' })
  password: string;

  @IsOptional()
  name: string;
}
