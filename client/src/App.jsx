import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
// import { ProduitAddForm } from './components/ProduitAddForm'
// import Produits from './pages/Produits'
import ProduitsAdmin from './pages/ProduitsAdmin'

function App() {

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <ProduitsAdmin />
      </div>
      <div className='sticky bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  )
}

export default App
