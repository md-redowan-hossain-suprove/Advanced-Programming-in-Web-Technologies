
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateSupportMessageDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  message: string;
}
