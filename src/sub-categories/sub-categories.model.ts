import { ApiProperty } from "@nestjs/swagger"
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Categories } from "src/categories/categories.model"

interface SubCategoryCreationAttrs {
    category_id: number
    sub_category_name: string
}

@Table({tableName: 'sub-categry'})
export class SubCategory extends Model<SubCategory, SubCategoryCreationAttrs>{
    @ApiProperty({example: '1', description: "Uniklal id"})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    sub_category_id: number

    @ApiProperty({example: '1', description: 'Unikal id'})
    @ForeignKey(() => Categories)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    category_id: number

    @ApiProperty({example: 'honor 7', description: "Qurilma nomi"})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    sub_category_name: string
}