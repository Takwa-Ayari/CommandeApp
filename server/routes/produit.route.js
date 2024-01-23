var express = require('express');
var router = express.Router();
const produitController = require('../controllers/produit.controller');

router.post('/add', produitController.postAddProduct);

router.get('/show', produitController.getProduits);

router.get('/show/:id', produitController.getOneProduit);

router.delete('/delete/:id', produitController.deleteProduit);

router.put('/edit/:id', produitController.putEditProduit);

module.exports = router;