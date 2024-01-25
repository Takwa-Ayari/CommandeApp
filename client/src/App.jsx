import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import { LoginForm } from './components/LoginForm';
import Navbar from './components/Navbar';
import Produits from './pages/Produits';
import ProduitsAdmin from './pages/ProduitsAdmin';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Produits />} />
    <Route path="/produits" element={<Produits />} />
    <Route path="/admin" element={<LoginForm />} />
    <Route path="/produits-admin" element={<ProduitsAdmin />} />
  </Routes>
);

function App() {
  return (
    <Router>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <AppRoutes />
        </div>
        <div className='sticky bottom-0 w-full'>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
