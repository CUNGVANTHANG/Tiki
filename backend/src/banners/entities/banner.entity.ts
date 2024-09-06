import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'banners' })
export class BannerEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  thumbnail: string;

  @Column()
  type: string;
}
