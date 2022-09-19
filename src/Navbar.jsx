import React from 'react';
import Form from './Form';
import Dropdown from './components/Dropdown';
import Secciones from './Secciones'

const Navbar = () => {
    const listDropdown = ["Chains", "Anillos", "Pulseras", "Aritos", "Grills", "Dijes"]
    return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <Secciones/>
              <Dropdown lista={listDropdown}/>
            </ul>
            <Form busqueda="Buscar producto"/>
        </div>
        </div>
      </nav>
    </>
    );
}

export default Navbar;
