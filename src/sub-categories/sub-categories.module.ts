import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Categories } from 'src/categories/categories.model';
import { SubCategoriesController } from './sub-categories.controller';
import { SubCategory } from './sub-categories.model';
import { SubCategoriesService } from './sub-categories.service';

@Module({
  imports: [
    SequelizeModule.forFeature([SubCategory, Categories]),
    forwardRef(() => Categories)
  ],
  controllers: [SubCategoriesController],
  providers: [SubCategoriesService],
  exports: [SubCategoriesService]
})
export class SubCategoriesModule {}
