import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

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
}