import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SubCategoriesService } from 'src/sub-categories/sub-categories.service';
import { CreateProductDto } from './dto/create-products.dto';
import { QueryDto } from './dto/query.dto';
import { UpdateProductDto } from './dto/update-products.dto';
import { Products } from './products.model';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Products) private productRepository: typeof Products,
        private readonly subCategoryService: SubCategoriesService
    ) {}

    async create(createProductDto: CreateProductDto){
        try {
            console.log(createProductDto);
            const product = await this.productRepository.create(createProductDto)
            return product
        } catch (error) {
            console.log(error);
            throw new HttpException("Serverda xatolik", HttpStatus.FORBIDDEN)
        }
    }

    async getAllByQuery(query: QueryDto){
        try {
            if(query.subCategoryId && query.model){
                console.log(query);
               const products = await this.productRepository.findAll({where: {
                sub_category_id: Number(query.subCategoryId),
                model: query.model
               }}) 
               return products
            }
            else if(query.subCategoryId){
                const products = await this.productRepository.findAll({where: {sub_category_id: query.subCategoryId}})
                return products
            } else if(query.categoryId){
                const prod = await this.subCategoryService.getOne(Number(query.categoryId))
                const arr = prod.map(obj => {
                    return [...obj.products]
                })
                return arr.flat()
            }
        } catch (error) {
            console.log(error);
            throw new HttpException('Serverda xatolik', HttpStatus.FORBIDDEN)
        }
    }


    async getAll(){
        try {
            const products = await this.productRepository.findAll({include: {all: true}})
            return products
        } catch (error) {
            throw new HttpException("Serverda xatolik", HttpStatus.FORBIDDEN)
        }
    }

//products?categoryId=1
//products?subCategoryId=1
//products?subCategoryId=1&model=samsung
//products?model=samsung
//products/1

    async getOneById(id: number){
        try {
            const product = await this.productRepository.findByPk(id,{ include: {all: true}})
            return product
        } catch (error) {
            throw new HttpException("Serverda xatolik", HttpStatus.FORBIDDEN)
        }
    }

    async updateProduct(id: number, updateProductDto: UpdateProductDto){
        try {
            const product = await this.productRepository.findByPk(id)
            if(!product) throw new HttpException("Malumot topilmadi", HttpStatus.NOT_FOUND)

            const updateProduct = await this.productRepository.update(updateProductDto, {where: {product_id: id}, returning: true})
            return updateProduct
        } catch (error) {
            throw new HttpException("Serverda xatolik", HttpStatus.FORBIDDEN)
        }
    }

    async deleteProduct(id: number){
        try {
            const product = await this.productRepository.findByPk(id)
            if(!product) throw new HttpException("Malumot topilmadi", HttpStatus.NOT_FOUND)
            await this.productRepository.destroy({where: {product_id: id}})
            return product  
        } catch (error) {
            throw new HttpException("Serverda xatolik", HttpStatus.FORBIDDEN)
        }
    }


}
