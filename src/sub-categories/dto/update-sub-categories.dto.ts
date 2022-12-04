import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateSubCategoriesDto {
    @IsNotEmpty()
    @IsNumber({},{message: "Id raqam bo'lishi kerak"})
    readonly category_id: number

    @IsNotEmpty()
    @IsString({message: "Sub category must be a string"})
    readonly sub_category_name: string
}