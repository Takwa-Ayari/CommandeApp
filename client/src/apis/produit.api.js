import { api } from './axios';

const API_PRODUIT = "/produit"

export const getAllProducts = async () => {
    const response = await api.get(`${API_PRODUIT}/show/`);
    return response;
}


export const postAddProduit = async (produit) => {
    const response = await api.post(`${API_PRODUIT}/add`,produit);
    return response;
}

export const deleteProduct = async(produitID) => {
    const response = await api.delete(`${API_PRODUIT}/delete/${produitID}`);
    return response;
}

export const editProduit = async (produitId, produit) => {
    const response = await api.put(`${API_PRODUIT}/edit/${produitId}`, produit);
    return response;
}