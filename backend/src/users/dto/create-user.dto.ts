import { Expose } from 'class-transformer';

export class CreateUserDto {
  @Expose()
  phoneNumber: string;

  @Expose()
  password: string;
}
