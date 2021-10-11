// import '';
import CategoryNav from '../../components/Category/Category-nav';
import DriverBlocks from '../../components/DriversBlock/DriversBlock';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import NecessaryProducts from '../../components/NessesaryPropduct/NessesaryPropduct';
import PopularProduct from '../../components/PopularProduct/PopularProduct';
import SelectMenu from '../../components/SelectMenu/SelectMenu';
import ShopByCategories from '../../components/ShopByCategories/ShopByCategories';
import ShopByMakes from '../../components/ShopByMakes/ShopByMakes';
import SubscribeBlock from '../../components/SubscribeBlock/SubscribeBlock';
const Home = () => {
  return (

    <>
      <InfoBlock />
      <SelectMenu />
      <ShopByCategories />
      <DriverBlocks />
      <PopularProduct />
      <ShopByMakes />
      <SubscribeBlock />
      <NecessaryProducts />
    </>
  );
}

export default Home;