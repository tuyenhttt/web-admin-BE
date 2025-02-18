import { IsNotEmpty } from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty({ message: 'User name is not empty' })
  username: string;

  @IsNotEmpty({ message: 'Password is not empty' })
  password: string;
}
