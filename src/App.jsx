import "./App.css";
import Dashboard from '../src/Components/Dashboard/Dashboard';
import Header from '../src/Components/Header/Header';
import ProductsPage from "./Pages/ProductsPage/ProductsPage"
import { Route, Router, Routes } from "react-router-dom";
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
          <Route path="/products-about" element={"Products-about"}/>
        </Routes>
      </main>
  </div>;
}

export default App;
