import React from 'react';
import Components4 from '../Card-components/components4';
import Table4 from './table4';


const Card4 = () => {
    return (
            <div className="card mb-3">
                <h1>Chain de Dios</h1>
                <div className="card-body">
                <h5 className="card-title">Plata</h5>
                </div>
                <Components4/>
                <Table4/>
                <div className="card-body">
                <a href="#" className="card-link">Comprar ahora</a>
                <a href="#" className="card-link">Agregar al carrito</a>
                </div>
            </div>
    );
}

export default Card4;
