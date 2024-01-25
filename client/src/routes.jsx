import { createBrowserRouter } from "react-router-dom";
//import App from "./App";
import Produits from "./pages/Produits";
import { LoginForm } from "./components/LoginForm";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginForm />
    },
    {
        path :'/produits',
        element : <Produits />
    }
]);