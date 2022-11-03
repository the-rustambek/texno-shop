import "./App.css";
import Dashboard from '../src/Components/Dashboard/Dashboard';
import Header from '../src/Components/Header/Header';
import Products from '../src/Components/Products/Products';

function App() {
  return <div className="app">
      <Dashboard />
      <main>
          <Header />
          <Products />
      </main>
  </div>;
}

export default App;
