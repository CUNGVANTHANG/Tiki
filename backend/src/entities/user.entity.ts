import { IsOptional } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'users',
})
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsOptional()
  @Column({ nullable: true })
  fullName: string | null;

  @IsOptional()
  @Column({ nullable: true })
  nickName: string | null;

  @Column()
  phoneNumber: string;

  @IsOptional()
  @Column({ nullable: true })
  email: string | null;

  @IsOptional()
  @Column({ nullable: true })
  dayOfBirth: string | null;

  @IsOptional()
  @Column({ nullable: true })
  gender: string | null;

  @IsOptional()
  @Column({ nullable: true })
  nationality: string | null;

  @Column()
  password: string;

  @Column()
  facebookId: string;

  @Column()
  googleId: string;
}
