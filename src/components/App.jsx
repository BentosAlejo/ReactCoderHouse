import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/App.css'
import Navbar from './content/Navbar';
import Home from './content/Home';
import Carrito from './content/Carrito';
import Producto from './content/Producto';
import About from './content/About';
import Contacto from './content/Contacto';
import Footer from './content/Footer';
import Categoria from './content/Categoria';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route element={<Home/>} path="/"/>
          <Route element={<Producto/>} path="/producto/:id"/>
          <Route element={<Categoria/>} path="/categoria/:id"/>
          <Route element={<About/>} path="/about"/>
          <Route element={<Contacto/>} path="/contacto"/>
          <Route element={<Carrito/>} path="/carrito"/>
        </Routes>
        <Footer/>

      </BrowserRouter>
      


      
    </>
  );
}

export default App;

