import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BannerEntity } from '../entities/banner.entity';
import { Repository } from 'typeorm';
import { CreateBannerDto } from '../dto/create-banner.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class BannersService {
  constructor(
    @InjectRepository(BannerEntity)
    private readonly bannersRepository: Repository<BannerEntity>,
  ) {}

  async create(createBannerDto: CreateBannerDto) {
    const newBanner = await this.bannersRepository.save(createBannerDto);
    return plainToInstance(CreateBannerDto, newBanner, {
      excludeExtraneousValues: true,
    });
  }

  async find() {}

  async update() {}

  async delete() {}

  async findAll() {
    return await this.bannersRepository.find({ take: 6 });
  }
}
