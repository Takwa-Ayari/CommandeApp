/* eslint-disable react/prop-types */
import ecommerce from '../assets/img/ecommerce_1.png'

function ProduitCard({product}) {
  return (
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:scale-105">
    <a href="#">
        <img className="p-8 rounded-t-lg" src={ecommerce} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">{ product.nom }</h5>
        </a>
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 ">{ product.prix } Dt</span>
            <a href="#" className="flex items-center justify-evenly text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 mr-1">
                <path d="M1.75 1.002a.75.75 0 1 0 0 1.5h1.835l1.24 5.113A3.752 3.752 0 0 0 2 11.25c0 .414.336.75.75.75h10.5a.75.75 0 0 0 0-1.5H3.628A2.25 2.25 0 0 1 5.75 9h6.5a.75.75 0 0 0 .73-.578l.846-3.595a.75.75 0 0 0-.578-.906 44.118 44.118 0 0 0-7.996-.91l-.348-1.436a.75.75 0 0 0-.73-.573H1.75ZM5 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
            </svg> Add to cart</a>
        </div>
    </div>
</div>

  )
}

export default ProduitCard