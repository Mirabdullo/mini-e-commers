import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { SubCategory } from "src/sub-categories/sub-categories.model";

interface CategoriesCreationAttrs {
    category_name: string
}

@Table({tableName: 'categories'})
export class Categories extends Model<Categories, CategoriesCreationAttrs> {
    @ApiProperty({example: '1', description: "Unikal id"})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    category_id: number


    @ApiProperty({example: "Smartfon", description:"Kategoriya nomu"})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    category_name: string

    @HasMany(() => SubCategory)
    subCategory: SubCategory[]
}