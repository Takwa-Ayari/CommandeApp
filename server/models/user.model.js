const { DataTypes } = require('sequelize');
const sequelize = require('../databaseConnection');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type : DataTypes.ENUM("USER","ADMIN"),
        allowNull : false,
        defaultValue : 'USER'
    }
});

module.exports = User;