import { IsOptional, IsNumber, IsString } from "class-validator"

export class UpdateProductDto {
    @IsOptional()
    @IsNumber({},{message: "Sub category id must be number!"})
    readonly sub_category_id: number

    @IsOptional()
    @IsString({message: "model must be string!"})
    readonly model: string

    @IsOptional()
    @IsString({message: "Product name must be string!"})
    readonly product_name: string

    @IsOptional()
    @IsString({message: "Color must be string!"})
    readonly color: string

    @IsOptional()
    @IsNumber({},{message: "Product price must be number!"})
    readonly price: number
}