import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductEntity } from './entities/product.entity';
import { ProductsModule } from './products/products.module';
import { BrandEntity } from './entities/brand.entity';
import { BrandsModule } from './brands/brands.module';
import { BannerEntity } from './entities/banner.entity';
import { BannersModule } from './banners/banners.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3309,
      username: 'root',
      password: 'root',
      database: 'tiki',
      entities: [UserEntity, ProductEntity, BrandEntity, BannerEntity],
      synchronize: true, // dev(synchronize: true) -> production(synchronize: false)
    }),
    UsersModule,
    ProductsModule,
    BrandsModule,
    BannersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
