var express = require('express');
var router = express.Router();
const produitRouter = require('./produit.route');

router.use('/produit', produitRouter);

module.exports = router;
