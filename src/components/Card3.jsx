import React from 'react';
import Components3 from '../Card-components/components3';
import Table3 from './table3';

const Card3 = () => {
    return (
            <div className="card mb-3">
                <h1>Pulcera Ice</h1>
                <div className="card-body">
                <h5 className="card-title">Plata</h5>
                </div>
                <Components3/>
                <Table3/>
                <div className="card-body">
                <a href="#" className="card-link">Comprar ahora</a>
                <a href="#" className="card-link">Agregar al carrito</a>
                </div>
            </div>
  
    );
}

export default Card3;
