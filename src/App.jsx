import "./App.css";
import Dashboard from '../src/Components/Dashboard/Dashboard';
import Header from '../src/Components/Header/Header';
import ProductsPage from "./Pages/ProductsPage/ProductsPage"
function App() {
  return <div className="app">
      <Dashboard />
      <main className="main">
          <Header />
          <ProductsPage />
      </main>
  </div>;
}

export default App;
