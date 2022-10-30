import React from 'react';
import CartWidget from './CartWidget';
import Secciones from './layouts/Secciones'

const ItemListContainer = ({greetings}) => {
    const listDropdown = ["Chains", "Anillos", "Pulseras", "Aritos", "Grills", "Dijes"]

    return (
        
            <ul className="navbar-nav me-auto">
              <Secciones/>
              
              <CartWidget mensaje={greetings}/>
              <li>
                {greetings}
              </li>
            
            </ul>
    );
}

export default ItemListContainer;

