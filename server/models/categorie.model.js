
const { DataTypes } = require('sequelize');
const sequelize = require('../databaseConnection');

const Categorie = sequelize.define('Categorie', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Categorie;
