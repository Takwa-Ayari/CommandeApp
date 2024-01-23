const { DataTypes } = require('sequelize');
const sequelize = require('../databaseConnection');
const ProduitCommande = require('../models/produitCommande.model');

const Commande = sequelize.define('Commande', {
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

Commande.hasMany(ProduitCommande);
ProduitCommande.belongsTo(Commande);

module.exports = Commande;
