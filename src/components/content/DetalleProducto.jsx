import React from 'react';
import Compras from '../layouts/compras';
import Buttons from '../layouts/Buttons';

const DetalleProducto = ({producto}) => {
    return (
        <>
            <h1>{producto.nombre}</h1>
            <div className="card-body">
                <h5 className="card-title">{producto.material}</h5>
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" >
                        <img src={"../media/" + producto.img1} alt={producto.nombre} className="pic"/>
                    </div>
                    <div className="carousel-item">
                        <img src={"../media/" + producto.img2} className="d-block pic" alt={producto.nombre} />
                    </div>
                    <div className="carousel-item">
                        <img src={"../media/" + producto.img3} className="d-block pic" alt={producto.nombre} />
                    </div>
                </div>
                <Buttons/>
            </div>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='table-secondary'>
                        <th scope="row"><h1>{producto.precio}</h1></th>
                        <td>{producto.cuotas}</td>
                        <td>Envios worldwide</td>
                        <td><button className='btn btn-dark'>Calcular envio</button></td>
                    </tr>
                </tbody>
            </table>
            <Compras/>
        </>
    );
}

export default DetalleProducto;
