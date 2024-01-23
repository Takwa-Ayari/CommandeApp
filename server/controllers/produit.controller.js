const Produit = require('../models/produit.model');

exports.postAddProduct = (req, res, next) => {
        Produit.create(req.body)
            .then(produit => {
                if (produit) {
                    res.status(201).json({produit: produit , message : "Produit created"});
                }else{
                    res.status(204).json({message : "Something went wrong"});
                }
            })
            .catch(err => res.status(500).json({ error: 'Internal Server Error' }));
}

exports.getProduits = (req, res, next ) => {
    Produit.findAll()
        .then(produits => {
            res.status(200).json({ produits : produits , message : "Produits recieved" });
        })
        .catch(err => res.status(500).json({ error: 'Internal Server Error' }))
}

exports.getOneProduit = (req, res, next) => {
    const id = req.params.id;
    Produit.findByPk(id)
        .then(produit => {
            if (!produit){
                res.status(204).json({message : "Aucun produit trouvé"})
            }else{
                res.status(200).json({produit : produit, message : "Produit recieved"});
            }
        })
        .catch(err => res.status(500).json({ error: 'Internal Server Error' }))
        
}

exports.deleteProduit = (req, res, next) => {
    let id = req.params.id;
    Produit.findByPk(id)
        .then(produit => {
            if (!produit) {
                return res.status(404).json({ message : 'Produit not found' });
            }
            produit.destroy()
                .then(result => res.status(204).json({message : "Produit supprime"}))
                .catch(err => res.status(500).json({ error: 'Internal Server Error' }))    
        })
        .catch(err => res.status(500).json({ error: 'Internal Server Error' }))
}

exports.putEditProduit = (req, res, next) => {
    let id = req.params.id;
    Produit.findByPk(id)
        .then(produit => {
            if (!produit) {
                return res.status(404).json({message : 'Produit not found'})
            }
            produit.update(req.body)
                .then(updatedProduit => res.status(203).json({message : 'Produit updated', produit : updatedProduit}))
                .catch(err => res.status(500).json({ error: 'Internal Server Error' }))
        })
        .catch(err => res.status(500).json({ error: 'Internal Server Error' }))
}