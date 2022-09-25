import React from 'react';
import Components from '../Card-components/components';
import Table from './table';

const Card = () => {
    return (
        <>
            
            <div className="card mb-3">
                <h1>Anillo del rey</h1>
                <div className="card-body">
                <h5 className="card-title">Oro</h5>
                </div>
                <Components/>
                <Table/>
                <div className="card-body">
                <a href="#" className="card-link">Comprar ahora</a>
                <a href="#" className="card-link">Agregar al carrito</a>
                </div>
            </div>
  
        </>

        
    );
}

export default Card;
