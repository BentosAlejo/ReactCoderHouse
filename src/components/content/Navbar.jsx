import React from 'react';
import {Link} from 'react-router-dom'
import ItemListContainer from '../ItemListContainer';
import Dropdown from '../layouts/Dropdown';
import Secciones from '../layouts/Secciones';



const Navbar = () => {
  const listDropdown = ["Chains", "Anillos", "Pulseras", "Aritos", "Grills", "Dijes"]
   
    return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarColor01">
              
              <ItemListContainer greetings="Empty"/>
              
          </div>
          <ul>
            <Link className="nav-link" to="/carrito"><button className='btn btn-dark'><i className="fa-solid fa-cart-shopping"></i></button></Link>
          </ul>
        </div>
      </nav>
    </>
    );
}

export default Navbar;
