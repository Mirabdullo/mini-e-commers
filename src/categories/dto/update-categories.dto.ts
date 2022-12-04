import { IsString } from "class-validator";

export class UpdateCategoriesDto {
    @IsString({message: "Category name must be string!"})
    readonly category_name: string
}