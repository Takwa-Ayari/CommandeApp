import { useEffect, useState } from "react"
import { getAllProducts } from "../apis/produit.api";
import ProduitCard from "../components/ProduitCard";
import SearchInput from "../components/SearchInput";

function Produits() {

  const [produits, setProduits] = useState([]);

  useEffect(() => {
    getAllProducts().then(result => setProduits(result.data))
  }, []);

  return (
    <div className="flex flex-col gap-3 mt-3 px-24 py-12">
      <SearchInput />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {produits.map((product) => (
          <ProduitCard key={product.id} product={product}></ProduitCard>
        ))}
      </div>
    </div>
  );
}

export default Produits