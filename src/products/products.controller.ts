import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-products.dto';
import { QueryDto } from './dto/query.dto';
import { UpdateProductDto } from './dto/update-products.dto';
import { Products } from './products.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @ApiOperation({ summary: 'Product qoshish' })
  @ApiResponse({ status: 201, type: Products })
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @ApiOperation({ summary: "Query bo'yicha olish" })
  @ApiResponse({ status: 200, type: [Products] })
  @Get()
  getAllByQuery(@Query() query: QueryDto) {
    return this.productService.getAllByQuery(query);
  }

  @ApiOperation({ summary: 'Barcha productlarni olish' })
  @ApiResponse({ status: 201, type: [Products] })
  @Get()
  getAll() {
    return this.productService.getAll();
  }

  @ApiOperation({ summary: 'Bitta productni olish' })
  @ApiResponse({ status: 201, type: Products })
  @Get(':id')
  getOneById(@Param('id') id: number) {
    return this.productService.getOneById(id);
  }

  @ApiOperation({ summary: 'Product malumotlarini malumotlarini olish' })
  @ApiResponse({ status: 201, type: Products })
  @Put(':id')
  updateProduct(
    @Param('id') id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.updateProduct(id, updateProductDto);
  }

  @ApiOperation({ summary: 'Product ochirish' })
  @ApiResponse({ status: 201, type: Products })
  @Delete(':id')
  deleteProduct(@Param('id') id: number) {
    return this.productService.deleteProduct(id);
  }
}
