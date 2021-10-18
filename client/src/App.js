import { Redirect, Route } from 'react-router';
import './App.css';
import Catalog from './components/Catalog/Catalog';
import CategoryNav from './components/Category/Category-nav';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home/Home';
import ProductSingle from './components/ProductSingle/ProductSingle';
import Sidebar from './components/Sidebar';
import { getProductCategory } from "./redux/ProductReduser";

function App() {

  getProductCategory();

  return (

    <div>
      <Header />
      <Sidebar />
      <CategoryNav />
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>

      <Route path='/home' render={() => <Home />} />
      <Route path='/catalog' render={() => <Catalog />} />
      <Route path='/item/:id' render={() => <ProductSingle />} />
      <Footer />
    </div>
  );
}

export default App;