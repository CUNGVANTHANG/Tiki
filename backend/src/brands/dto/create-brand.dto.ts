import { Expose } from 'class-transformer';

export class CreateBrandDto {
  @Expose()
  thumbnail: string;
}
