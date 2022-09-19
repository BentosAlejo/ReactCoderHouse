import React from 'react';
import Components from '../Card-components/components';

const Card = () => {
    return (
        <>
            
            <div className="card mb-3">
                <h3 className="card-header">Nombre de la joya</h3>
                <div className="card-body">
                <h5 className="card-title">Material de la joya</h5>
                </div>
                <Components/>
                <div className="card-body">
                <p className="card-text">$precio</p>
                <p className="card-text">3 cuotas sin interes de $precio</p>
                </div>
                <div className="card-body">
                <a href="#" className="card-link">Comprar ahora</a>
                <a href="#" className="card-link">Agregar al carrito</a>
                </div>
            </div>
  
        </>

        
    );
}

export default Card;
