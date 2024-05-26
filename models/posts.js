import { DataTypes, Sequelize } from "sequelize";
import { db } from "../database/database.js";

const Posts = db.define('post', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true,
        allowNull:false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull:false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull:false
    },
    autherId: {
        type: DataTypes.UUID,
        allowNull:false
    }

})

export default Posts