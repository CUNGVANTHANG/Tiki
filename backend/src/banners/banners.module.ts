import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerEntity } from '../entities/banner.entity';
import { BannersController } from './banners.controller';
import { BannersService } from './services/banners.service';

@Module({
  imports: [TypeOrmModule.forFeature([BannerEntity])],
  controllers: [BannersController],
  providers: [BannersService],
})
export class BannersModule {}
