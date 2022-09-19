import React from 'react';
import Form from './Form';
import ItemListContainer from './components/ItemListContainer';

const Navbar = () => {
   
    return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarColor01">
            <ItemListContainer greetings="Empty"/>
            <Form busqueda="Buscar producto"/>
        </div>
        </div>
      </nav>
    </>
    );
}

export default Navbar;
