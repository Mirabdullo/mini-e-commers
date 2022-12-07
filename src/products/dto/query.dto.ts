import { IsOptional, IsString } from "class-validator";

export class QueryDto {
    @IsOptional()
    @IsString()
    readonly categoryId: string

    @IsOptional()
    @IsString()
    readonly subCategoryId: string

    @IsOptional()
    @IsString()
    readonly  model: string

}

//products?categoryId=1
//products?subCategoryId=1
//products?subCategoryId=1&model=samsung
//products?model=samsung
//products/1