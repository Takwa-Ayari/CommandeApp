import { useEffect, useState } from "react";
import { getAllProducts, deleteProduct } from "../apis/produit.api";
import { ProduitAddForm } from "../components/ProduitAddForm";
import { ProduitEditForm } from "../components/ProduitEditForm";

const ProduitsAdmin = () => {
  const [produits, setProduits] = useState([]);
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [selectedProduit, setSelectedProduit] = useState(null);

  useEffect(() => {
    getAllProducts().then((products) => {
      if (products.data) {
        setProduits(products.data);
      }
    });
  }, []);

  const deleteProduit = (productID) => {
    deleteProduct(productID).then(() => {
        setProduits(produits.filter((p) => p.id !== productID));
    })
  }

  const openModalAdd = () => {
    setIsModalAddOpen(true);
  };

  const closeModalAdd = () => {
    setIsModalAddOpen(false);
  };

  const openModalEdit = (produit) => {
    setIsModalEditOpen(true);
    setSelectedProduit(produit)
  };

  const closeModalEdit = () => {
    setIsModalEditOpen(false);
  };

  return (
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div className="flex flex-row justify-between">
    <div className="mr-2 text-sm text-gray-400 px-2">
        Il existe {produits.length} produits.
    </div>
    <div className="flex flex-row gap-4 mr-2">
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for items" />
        </div>
        <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="text-green-700 font-extrabold hover:text-white border border-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-sm px-5 py-2.5 text-center" onClick={openModalAdd}>+</button>
    </div>

    </div>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nom
            </th>
            <th scope="col" className="px-6 py-3">
              Categorie
            </th>
            <th scope="col" className="px-6 py-3">
              Quantité
            </th>
            <th scope="col" className="px-6 py-3">
              Prix
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {produits.map((product) => (
            <tr className="odd:bg-white  even:bg-gray-50  border-b " key={product.id}>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {product.nom}
              </th>
              <td className="px-6 py-4">{product.categorie}</td>
              <td className="px-6 py-4">{product.quantity}</td>
              <td className="px-6 py-4">{product.prix}</td>
              <td className="px-6 py-4">
                <button
                  className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    onClick={() => openModalEdit(product)}
                >
                  Edit
                </button>
                <button
                  className="text-red-700 cursor-pointer hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={() => deleteProduit(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalAddOpen && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
        >
          <div className="relative w-auto max-w-2xl mx-auto my-6">
            <div className="relative bg-white rounded-lg shadow-lg">
              <ProduitAddForm onFormSubmit={() => setIsModalAddOpen(false)}/>
              <button
                className="absolute top-0 right-0 p-4 text-xl font-semibold"
                onClick={closeModalAdd}
              >
                <svg className="w-6 h-6 hover:text-red-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6m0 12L6 6"/>
  </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      {isModalEditOpen && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
        >
          <div className="relative w-auto max-w-2xl mx-auto my-6">
            <div className="relative bg-white rounded-lg shadow-lg">
              <ProduitEditForm produit={selectedProduit} onFormSubmit={() => setIsModalEditOpen(false)}/>
              <button
                className="absolute top-0 right-0 p-4 text-xl font-semibold"
                onClick={closeModalEdit}
              >
                <svg className="w-6 h-6 hover:text-red-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6m0 12L6 6"/>
  </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProduitsAdmin;
