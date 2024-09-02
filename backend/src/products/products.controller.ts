import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductEntity } from './entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  createProduct(
    @Body() createProductDto: CreateProductDto,
  ): Promise<CreateProductDto> {
    return this.productService.create(createProductDto);
  }

  @Put(':id')
  updateProduct() {}

  @Delete(':id')
  deleteProduct() {}

  @Get(':id')
  getProduct() {}

  @Get()
  getAllProducts(): Promise<ProductEntity[]> {
    return this.productService.findAll();
  }
}
