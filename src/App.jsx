import "./App.css";
import Dashboard from '../src/Components/Dashboard/Dashboard';
import Header from '../src/Components/Header/Header';
import ProductsPage from "./Pages/ProductsPage/ProductsPage"
import { Route, Routes } from "react-router-dom";
import ProductsAboutPage from "./Pages/ProductsAboutPage/ProductsAboutPage";
function App() {
  return <div className="app">
      <Dashboard />
      <main className="main">
      <Header />
      
      <Routes>
          <Route path="/" element={<div className="page">Home pagega xush kelibsiz</div>}/>
          <Route path="/zakaz" element={<div className="page">Zakaz pagega xush kelibsiz</div>}/>
          <Route path="/tovar" element={<div className="page">Tovarlar pagega xush kelibsiz</div>}/>
          <Route path="/otziv" element={<div className="page">Otziv pagega xush kelibsiz</div>}/>
          <Route path="/products" element={<ProductsPage />}/>
          <Route path="/products-about/=:slug" element={<ProductsAboutPage />}/>
        </Routes>
      </main>
  </div>;
}

export default App;
