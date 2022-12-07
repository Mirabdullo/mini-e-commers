import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SubCategory } from 'src/sub-categories/sub-categories.model';
import { SubCategoriesService } from 'src/sub-categories/sub-categories.service';
import { Categories } from './categories.model';
import { CreateCategoriesDto } from './dto/create-categories.dto';
import { UpdateCategoriesDto } from './dto/update-categories.dto';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectModel(Categories) private categoryRepository: typeof Categories,
        // private readonly subCategoryRepository: SubCategoriesService
    ){}

    async create(createCategories: CreateCategoriesDto){
        const newCategories = await this.categoryRepository.create(createCategories)
        return newCategories
    }


    async getAll(){
        const categories = await this.categoryRepository.findAll()
        return categories
    }

    async getOneById(id: number){
        const category = await this.categoryRepository.findByPk(id,{include: {all: true}})
        if(!category){
            throw new HttpException("Ma'lumot topilmadi", HttpStatus.NOT_FOUND)
        }
        return category
    }

    async updateCategories(id: number, updateCategoriesDto: UpdateCategoriesDto){
        const category = await this.categoryRepository.findByPk(id)
        if(!category){
            throw new HttpException("Ma'lumot topilmadi", HttpStatus.NOT_FOUND)
        }

        const newCategories = await this.categoryRepository.update(updateCategoriesDto, {where: {category_id: id}, returning: true})
        return newCategories
    }

    async deleteCategories(id: number){
        const category = await this.categoryRepository.findByPk(id)
        if(!category){
            throw new HttpException("Ma'lumot topilmadi", HttpStatus.NOT_FOUND)
        }

        await this.categoryRepository.destroy({where: {id}})
        return category
    }

}
