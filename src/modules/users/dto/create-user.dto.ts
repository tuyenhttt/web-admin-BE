import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name is not empty' })
  name: string;

  @IsNotEmpty({ message: 'Email is not empty' })
  @IsEmail({}, { message: 'Email is invalid' })
  email: string;

  @IsNotEmpty({ message: 'Password is not empty' })
  password: string;

  phone: string;
  address: string;
  image: string;
}
