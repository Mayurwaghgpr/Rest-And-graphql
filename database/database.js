import { Sequelize } from "sequelize";

export const db = new Sequelize('testdatabase', 'postgres', 'mayur@619', {
host: 'localhost',
dialect:'postgres' 
});
