import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.usersRepository.save(createUserDto);
    return plainToInstance(CreateUserDto, newUser, {
      excludeExtraneousValues: true,
    });
  }

  async find() {}

  async update() {}

  async delete() {}
}
