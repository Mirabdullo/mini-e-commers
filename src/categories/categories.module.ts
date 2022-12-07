import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SubCategory } from 'src/sub-categories/sub-categories.model';
import { SubCategoriesModule } from 'src/sub-categories/sub-categories.module';
import { SubCategoriesService } from 'src/sub-categories/sub-categories.service';
import { CategoriesController } from './categories.controller';
import { Categories } from './categories.model';
import { CategoriesService } from './categories.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Categories]),
    
    forwardRef(() => SubCategory),
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService],
  exports: [CategoriesService]
})
export class CategoriesModule {}
