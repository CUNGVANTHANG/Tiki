import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'brands' })
export class BrandEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  thumbnail: string;

  @Column()
  name: string;
}
