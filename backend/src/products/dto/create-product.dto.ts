import { Expose } from 'class-transformer';

export class CreateProductDto {
  @Expose()
  name: string;

  @Expose()
  thumbnail: string;

  @Expose()
  rating: number;

  @Expose()
  price: number;

  @Expose()
  discount: number;

  @Expose()
  textBadge: string;

  @Expose()
  frameBadge: string;

  @Expose()
  origin: string;

  @Expose()
  deliveryInfo: string;

  @Expose()
  sold: number;

  @Expose()
  provider: string;

  @Expose()
  carrier: string;

  @Expose()
  type: string;

  @Expose()
  quantity: number;

  @Expose()
  ads: boolean;
}
