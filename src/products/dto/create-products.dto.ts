import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateProductDto {
    @IsNotEmpty()
    @IsNumber({},{message: "Sub category id must be number!"})
    readonly sub_category_id: number

    @IsNotEmpty()
    @IsString({message: "model must be string!"})
    readonly model: string

    @IsNotEmpty()
    @IsString({message: "Product name must be string!"})
    readonly product_name: string

    @IsNotEmpty()
    @IsString({message: "Color must be string!"})
    readonly color: string

    @IsNotEmpty()
    @IsNumber({},{message: "Product price must be number!"})
    readonly price: number
}