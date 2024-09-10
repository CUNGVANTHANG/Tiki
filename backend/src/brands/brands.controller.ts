import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BrandsService } from './services/brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { BrandEntity } from '../entities/brand.entity';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  createBrand(@Body() createBrandDto: CreateBrandDto): Promise<CreateBrandDto> {
    return this.brandsService.create(createBrandDto);
  }

  @Put(':id')
  updateBrand() {}

  @Delete(':id')
  deleteBrand() {}

  @Get(':id')
  getBrand() {}

  @Get()
  getAllBrands(): Promise<BrandEntity[]> {
    return this.brandsService.findAll();
  }
}
