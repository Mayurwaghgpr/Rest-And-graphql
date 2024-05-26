import { DataTypes, Sequelize } from "sequelize";
import { db } from "../database/database.js";

const User = db.define('user', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull:false
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false
    }
})

export default User