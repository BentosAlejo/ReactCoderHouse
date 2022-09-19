import React from 'react';
import Dropdown from './Dropdown';
import CartWidget from './CartWidget';
import Secciones from '../Secciones'

const ItemListContainer = ({greetings}) => {
    const listDropdown = ["Chains", "Anillos", "Pulseras", "Aritos", "Grills", "Dijes"]

    return (
        
            <ul className="navbar-nav me-auto">
              <Secciones/>
              <Dropdown lista={listDropdown}/>
              <CartWidget mensaje={greetings}/>
              <li>
                mensaje :{greetings}
              </li>
            
            </ul>
    );
}

export default ItemListContainer;

