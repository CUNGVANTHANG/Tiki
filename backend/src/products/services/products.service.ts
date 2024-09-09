import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from '../entities/product.entity';
import { ILike, Repository } from 'typeorm';
import { CreateProductDto } from '../dto/create-product.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productsRepository: Repository<ProductEntity>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct = await this.productsRepository.save(createProductDto);
    return plainToInstance(CreateProductDto, newProduct, {
      excludeExtraneousValues: true,
    });
  }

  async update() {}

  async delete() {}

  async getAll() {
    return await this.productsRepository.find();
  }

  async getAllByName(name: string) {
    return await this.productsRepository.find({
      where: { name: ILike(`%${name}%`) },
    });
  }
}
