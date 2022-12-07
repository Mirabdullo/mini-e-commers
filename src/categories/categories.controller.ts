import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoriesDto } from './dto/create-categories.dto';
import { UpdateCategoriesDto } from './dto/update-categories.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}


  @Post()
  create(@Body() createCategoriesDto: CreateCategoriesDto){
    return this.categoriesService.create(createCategoriesDto)
  }


  @Get('all')
  getAll(){
    return this.categoriesService.getAll()
  }

  @Get(':id')
  getOneBid(@Param('id') id: number){
    return this.categoriesService.getOneById(id)
  }

  @Put(':id')
  updateCategories(@Param('id') id: number, @Body() updateCategoriesDto: UpdateCategoriesDto){
    return this.categoriesService.updateCategories(id,updateCategoriesDto)
  }


  @Delete(':id')
  deleteCategories(@Param('id') id: number){
    return this.categoriesService.deleteCategories(id)
  }
}
