import React from 'react';
import ItemListContainer from '../ItemListContainer';



const Navbar = () => {
  const listDropdown = ["Chains", "Anillos", "Pulseras", "Aritos", "Grills", "Dijes"]
   
    return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarColor01">
              <ItemListContainer greetings="Empty"/>
          </div>
        </div>
      </nav>
    </>
    );
}

export default Navbar;
