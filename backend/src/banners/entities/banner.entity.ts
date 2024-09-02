import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'banners' })
export class BannerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  thumbnail: string;

  @Column()
  type: string;
}
