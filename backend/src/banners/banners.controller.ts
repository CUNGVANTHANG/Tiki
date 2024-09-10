import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BannersService } from './services/banners.service';
import { CreateBannerDto } from './dto/create-banner.dto';
import { BannerEntity } from '../entities/banner.entity';

@Controller('banners')
export class BannersController {
  constructor(private readonly bannersService: BannersService) {}

  @Post()
  createBanner(
    @Body() createBannerDto: CreateBannerDto,
  ): Promise<CreateBannerDto> {
    return this.bannersService.create(createBannerDto);
  }

  @Put(':id')
  updateBanner() {}

  @Delete(':id')
  deleteBanner() {}

  @Get(':id')
  getBanner() {}

  @Get()
  getAllBanners(): Promise<BannerEntity[]> {
    return this.bannersService.findAll();
  }
}
