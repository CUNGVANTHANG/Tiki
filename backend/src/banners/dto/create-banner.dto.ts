import { Expose } from 'class-transformer';

export class CreateBannerDto {
  @Expose()
  thumbnail: string;
}
