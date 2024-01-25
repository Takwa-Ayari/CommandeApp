import { api } from './axios';

//const API_PRODUIT = "/users"

export const postLogin = async (credentials) => {
    const response = await api.post('/login' ,credentials);
    return response;
}
