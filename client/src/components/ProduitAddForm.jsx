import {useState} from 'react';
import { postAddProduit } from '../apis/produit.api';

export const ProduitAddForm = () => {
    
    const [nom , setNom ] = useState('');
    const [prix , setPrix ] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const handleSubmit =  async (e) => {
        e.preventDefault()
        console.log(nom + prix + quantity)
        const produit = {nom : nom , prix : prix , quantity : quantity};
        await postAddProduit(produit);
    }

    const handleCancel = () => {
        setNom('');
        setPrix(0);
        setQuantity(0);
    }

    return (
    <div className="flex items-center justify-center">
        <form className="bg-slate-300 rounded-lg gap-6 p-8" onSubmit={handleSubmit}>
            <div className="relative mt-2">
                <input type="text" id="nom" value={nom} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => setNom(e.target.value)} />
                <label htmlFor="nom" className="absolute text-base font-bold text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Nom</label>
            </div>
            <div className="relative mt-2">
                <input type="number" min={0} value={prix} id="prix" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => setPrix(e.target.value)} />
                <label htmlFor="prix" className="absolute text-base font-bold text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Prix</label>
            </div>
            <div className="relative mt-2">
                <input type="number" min={0} value={quantity} id="quantity" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => setQuantity(e.target.value)} />
                <label htmlFor="quantity" className="absolute text-base font-bold text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Quantité</label>
            </div>
            <div className="flex flex-row items-end justify-end gap-2 mt-2">
                <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={handleCancel}>Effacer</button>
                <button type="submit" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Ajouter</button>
            </div>
        </form>
    </div>
  );
};
