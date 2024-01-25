import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import { LoginForm } from "./components/LoginForm";
import Navbar from "./components/Navbar";
import Produits from "./pages/Produits";
import ProduitsAdmin from "./pages/ProduitsAdmin";
import { Provider } from "react-redux";
import store from "./store/store";

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
    <Provider store={store}>
      <Router>
        <div>
          <div>
            <Navbar />
          </div>
          <div>
            <AppRoutes />
          </div>
          <div className="sticky bottom-0 w-full">
            <Footer />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
