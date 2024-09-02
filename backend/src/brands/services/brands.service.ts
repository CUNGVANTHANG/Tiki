import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BrandEntity } from '../entities/brand.entity';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { CreateBrandDto } from '../dto/create-brand.dto';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(BrandEntity)
    private readonly brandsRepository: Repository<BrandEntity>,
  ) {}

  async create(createBrandDto: CreateBrandDto) {
    const newBrand = await this.brandsRepository.save(createBrandDto);
    return plainToInstance(CreateBrandDto, newBrand, {
      excludeExtraneousValues: true,
    });
  }

  async find() {}

  async update() {}

  async delete() {}

  async findAll() {
    return await this.brandsRepository.find();
  }
}
