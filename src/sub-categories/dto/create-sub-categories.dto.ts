import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateSubCategoriesDto {
    @IsNotEmpty()
    @IsNumber({},{message: "Id raqam bo'lishi kerak"})
    readonly category_id: number
}