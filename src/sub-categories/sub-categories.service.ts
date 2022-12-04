import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSubCategoriesDto } from './dto/create-sub-categories.dto';
import { UpdateSubCategoriesDto } from './dto/update-sub-categories.dto';
import { SubCategory } from './sub-categories.model';

@Injectable()
export class SubCategoriesService {
  constructor(
    @InjectModel(SubCategory) private subCategoryRepository: typeof SubCategory,
  ) {}

  async create(createSubCategoriesDto: CreateSubCategoriesDto) {
    try {
      const subCategory = await this.subCategoryRepository.create(
        createSubCategoriesDto,
      );
      return subCategory;
    } catch (error) {
      throw new HttpException('Serverda xatolik!', HttpStatus.FORBIDDEN);
    }
  }

  async getAll() {
    try {
      const subCategorys = await this.subCategoryRepository.findAll({
        include: { all: true },
      });
      return subCategorys;
    } catch (error) {
      throw new HttpException('Serverda xatolik!', HttpStatus.FORBIDDEN);
    }
  }

  async getOneById(id: number) {
    try {
      const subCategory = await this.subCategoryRepository.findByPk(id, {
        include: { all: true },
      });
      if (!subCategory) {
        throw new HttpException("Ma'lumot topilmadi", HttpStatus.NOT_FOUND);
      }
      return subCategory;
    } catch (error) {
      throw new HttpException('Serverda xatolik!', HttpStatus.FORBIDDEN);
    }
  }

  async updateSubCategory(
    id: number,
    updateSubCategoryDto: UpdateSubCategoriesDto,
  ) {
    try {
      const subCategory = await this.subCategoryRepository.findByPk(id);
      if (!subCategory) {
        throw new HttpException("Ma'lumot topilmadi", HttpStatus.NOT_FOUND);
      }
      const updateSubCategory = await this.subCategoryRepository.update(updateSubCategoryDto,{where: {id}, returning: true})
      return updateSubCategory
    } catch (error) {
      throw new HttpException('Serverda xatolik!', HttpStatus.FORBIDDEN);
    }
  }


  async deleteSubCategory(id: number){
    try {
        const subCategory = await this.subCategoryRepository.findByPk(id);
        if (!subCategory) {
          throw new HttpException("Ma'lumot topilmadi", HttpStatus.NOT_FOUND);
        }
        await this.subCategoryRepository.destroy({where: {id}})
        return subCategory
    } catch (error) {
        throw new HttpException('Serverda xatolik!', HttpStatus.FORBIDDEN);
    }
  }


}
