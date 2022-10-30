import React, {useState, useContext} from 'react';
import Buttons from '../layouts/Buttons';
import { CarritoContext } from './CarritoContext';

const DetalleProducto = ({producto}) => {
    const [cantidad, setCantidad] = useState(1)
    const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext)
    
    function cantProducto(operacion){
        if(operacion == "+"){
            if(cantidad < producto[1].stock){

                setCantidad(cantidad + 1)
            }
        }else{
            if(cantidad > 1){
                setCantidad(cantidad - 1)
            }
        }
    }
    
    
    return (
        <>
            <h1>{producto[1].nombre}</h1>
            <div className="card-body">
                <h5 className="card-title">{producto[1].material}</h5>
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" >
                        <img src={producto[1].img1} alt={producto[1].nombre} className="pic"/>
                    </div>
                    <div className="carousel-item">
                        <img src={producto[1].img2} className="d-block pic" alt={producto[1].nombre} />
                    </div>
                    <div className="carousel-item">
                        <img src={producto[1].img3} className="d-block pic" alt={producto[1].nombre} />
                    </div>
                </div>
                <Buttons/>
            </div>
            <table className='table table-hover mt-5'>
                <tbody>
                    <tr className='table-secondary'>
                        <th scope="row"><h1>{producto[1].precio}</h1></th>
                        <td>{producto[1].cuotas}</td>
                        <td>Envios worldwide</td>
                        <td><button className='btn btn-dark'>Calcular envio</button></td>
                    </tr>
                </tbody>
            </table>
            <div className="card border-secondary mb-3" style={{ maxWidth: "20rem" }}>
                    <div className="card-body">    
                    <button className='btn mx-3' onClick={() =>{cantProducto("-")}}>-</button>
                    <button className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">{cantidad}</button>
                    <button className='btn mx-3' onClick={() =>{cantProducto("+")}}>+</button>
                    <button className='btn btn-secondary mt-5 mx-5' onClick={() => agregarProducto(producto, cantidad)}>Agregar al carrito</button>
                    </div>
            </div>
        </>
    );
}

export default DetalleProducto;
