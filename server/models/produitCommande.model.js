const { DataTypes } = require('sequelize');
const sequelize = require('../databaseConnection');
const Produit = require('./produit.model');
const Commande = require('./commande.model');

const ProduitCommande = sequelize.define('ProduitCommande', {
    quantite: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
});

ProduitCommande.belongsTo(Produit);
Produit.belongsToMany(Commande, { through: ProduitCommande });

module.exports = ProduitCommande;
