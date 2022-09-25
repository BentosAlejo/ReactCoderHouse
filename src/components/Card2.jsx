import React from 'react';
import Components2 from '../Card-components/components2';
import Table2 from './table2';

const Card2 = () => {
    return (
            <div className="card mb-3">
                <h1>Chain de dios</h1>
                <div className="card-body">
                <h5 className="card-title">Oro</h5>
                </div>
                <Components2/>
                <Table2/>
                <div className="card-body">
                <a href="#" className="card-link">Comprar ahora</a>
                <a href="#" className="card-link">Agregar al carrito</a>
                </div>
            </div>
    );
}

export default Card2;
