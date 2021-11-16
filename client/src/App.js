import './App.css';
import Footer from './components/Footer';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/AppRouter';
import Header from './components/Header/Header';
import ModalPopup from './components/Popups/Modal';
import Preloader from './components/Popups/Preloader';

function App() {
  return (
    <BrowserRouter >
      <Header />
      <AppRouter />
      <Footer />
      <ModalPopup />
      <Preloader />
    </BrowserRouter>

  );
}

export default App;