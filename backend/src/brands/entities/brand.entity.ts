import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'brands' })
export class BrandEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  thumbnail: string;
}
