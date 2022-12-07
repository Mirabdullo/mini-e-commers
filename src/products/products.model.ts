import { ApiProperty } from "@nestjs/swagger"
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { SubCategory } from "src/sub-categories/sub-categories.model"

interface ProductCreationAttrs {
    sub_category_id: number
    model: string
    product_name: string
    color: string
    price: number
}



@Table({tableName: 'products'})
export class Products extends Model<Products, ProductCreationAttrs> {
    @ApiProperty({example: '1', description: "Unikal id"})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    product_id: number


    @ApiProperty({example: "1", description:"Sub categoriya idsi"})
    @ForeignKey(() => SubCategory)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    sub_category_id: number

    @ApiProperty({example: "honor 7", description: "Model nomi"})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    model: string

    @ApiProperty({example: "honor 10 Lite", description: "Product nomi"})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    product_name: string

    @ApiProperty({example: "blue", description: "product color"})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    color: string

    @ApiProperty({example: "200000", description: "Product price"})
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    price: number

    @BelongsTo(() => SubCategory)
    subCategory: SubCategory[]
}