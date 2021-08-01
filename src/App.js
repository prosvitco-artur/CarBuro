import './App.css';
import CategoryNav from './components/Category/Category-nav';
import DriverBlocks from './components/DriversBlock/DriversBlock';
import Footer from './components/Footer';
import Header from './components/Header';
import InfoBlock from './components/InfoBlock/InfoBlock';
import NessesaryPropduct from './components/NessesaryPropduct/NessesaryPropduct';
import PopularProduct from './components/PopularProduct/PopularProduct';
import SelectMenu from './components/SelectMenu/SelectMenu';
import ShopByCategories from './components/ShopByCategories/ShopByCategories';
import ShopByMakes from './components/ShopByMakes/ShopByMakes';
import Sidebar from './components/Sidebar';
import SubscribeBlock from './components/SubscribeBlock/SubscribeBlock';

function App() {

  return (

    <div>
      <Header />
      <Sidebar />
      <CategoryNav />
      <InfoBlock />
      <SelectMenu />
      <ShopByCategories />
      <DriverBlocks />
      <PopularProduct />
      <ShopByMakes />
      <SubscribeBlock />
      <NessesaryPropduct />
      <Footer />
    </div>
  );
}

export default App;