import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";


export class Pet extends Model<InferAttributes<Pet>, InferCreationAttributes<Pet>>{

    declare petId: number;
    declare name: string;
    declare animalType: string;
    declare breed: string;
    declare gender: string;
    declare age: string;
    declare imgUrl: string;
    declare description: string;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

export function PetFactory(sequelize: Sequelize) {

    Pet.init({
        petId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        animalType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imgUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },
        {
            freezeTableName: true,
            tableName: 'pets',
            sequelize
        })
}