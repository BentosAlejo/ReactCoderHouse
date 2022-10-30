import {memo} from 'react'
import React from 'react';
import {Link} from 'react-router-dom'
import Dropdown from './Dropdown';



const Secciones = () => {
  const listDropdown = ["Chains", "Anillos", "Pulceras", "Grillz", "Aritos"]
    return (
        <>  

              <li className="nav-item">
                <div id='divPic'></div>
                <h1 className="nav-link active">PIMP LUXURY</h1>
              </li>
              <li>
                <Link className="nav-link mt-5 mx-5" to="/"><button className='btn btn-dark'><i className="fa-solid fa-house"></i></button></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mt-5 mx-5" to="/contacto"><button className='btn btn-dark'><i className="fa-solid fa-phone"></i></button></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mt-5 mx-5" to="/About"><button className='btn btn-dark'><i className="fa-solid fa-people-roof"></i></button></Link>
              </li>
              <li>
                <Link className='nav-link mt-5 mx-5'><Dropdown lista = {listDropdown}/></Link>
              </li>
              <li>
                <Link className="nav-link mt-5 mx-5" to="/carrito"><button className='btn btn-dark'><i className="fa-solid fa-cart-shopping"></i></button></Link>
              </li>
        </>
            
    );
}

export default memo(Secciones);
