import React from 'react';
import Components5 from '../Card-components/components5';
import Table5 from './table5';

const Card5 = () => {
    return (
            <div className="card mb-3">
                <h1>Anillo del Rey</h1>
                <div className="card-body">
                <h5 className="card-title">Plata</h5>
                </div>
                <Components5/>
                <Table5/>
                <div className="card-body">
                    <a href="#" className="card-link">Comprar ahora</a>
                    <a href="#" className="card-link">Agregar al carrito</a>
                </div>
            </div>
    );
}

export default Card5;
