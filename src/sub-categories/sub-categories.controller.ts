import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiResponse } from '@nestjs/swagger';
import { CreateSubCategoriesDto } from './dto/create-sub-categories.dto';
import { SubCategory } from './sub-categories.model';
import { SubCategoriesService } from './sub-categories.service';

@Controller('sub-categories')
export class SubCategoriesController {
    constructor(private readonly subCategoryService: SubCategoriesService){}


    @ApiOperation({summary: 'Sub categoriya qoshish'})
    @ApiResponse({status: 201, type: SubCategory})
    @Post()
    create(@Body() createSubCategoriesDto: CreateSubCategoriesDto){
        return this.subCategoryService.create(createSubCategoriesDto)
    }


    @ApiOperation({summary: "Barcha sub categoriyalar"})
    @ApiResponse({status: 200, type: [SubCategory]})
    @Get()
    getAll(){
        return this.subCategoryService.getAll()
    }


    @ApiOperation({summary: "Berilgan id bo'yicha sub categoriya"})
    @ApiResponse({status: 200, type: SubCategory})
    @Get(':id')
    getOneById(@Param('id') id: number){
        return this.subCategoryService.getOneById(id)
    }






}
