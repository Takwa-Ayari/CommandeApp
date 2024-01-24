const { DataTypes } = require('sequelize');
const sequelize = require('../databaseConnection');
const Categorie = require('./categorie.model');

const Produit = sequelize.define('Produit', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prix: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    quantity : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
});

Produit.belongsTo(Categorie);
Categorie.hasMany(Produit);

module.exports = Produit;
