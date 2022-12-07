import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SubCategory } from 'src/sub-categories/sub-categories.model';
import { SubCategoriesModule } from 'src/sub-categories/sub-categories.module';
import { ProductsController } from './products.controller';
import { Products } from './products.model';
import { ProductsService } from './products.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Products, SubCategory]),
    SubCategoriesModule
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService]
})
export class ProductsModule {}
