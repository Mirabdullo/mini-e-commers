import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoriesDto {
    @IsNotEmpty()
    @IsString({message: "Category name must be string!"})
    readonly category_name: string
}