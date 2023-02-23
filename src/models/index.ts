import { Sequelize } from "sequelize";
import { PetFactory } from "./pet";


const dbName = 'petDB';
const username = 'root';
const password = 'Password1!';

const sequelize = new Sequelize(dbName, username, password, {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
});

PetFactory(sequelize);

export const db = sequelize;