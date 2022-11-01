import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from './CarritoContext';
import { Link } from 'react-router-dom';


const Carrito = () => {
    const {carrito, agregarProduto, quitarProducto} = useContext(CarritoContext)
    const [carritoLocal, setCarritoLocal] = useState([])
    
    useEffect(() => {
        const prodMostrar = carrito.map(producto => 
            <div className="card cardProducto animate__animated animate__backInDown" key={producto[0]}>
                                    
                <img src={producto[1].img1} className="card-img-top" alt={producto[1].nombre} />
                <div className="card-body">
                    <h5 className="card-title">{producto[1].nombre}</h5>
                    <p className="card-text">{producto[1].precio}</p>
                    <p className='card-text'>Cantidad: {producto.cantidad}</p>
                    <p className='card-text'>Subtotal: {producto[1].precio * producto.cantidad}</p>
                    <button className="btn btn-dark" onClick={() =>{quitarProducto(producto)}}>Eliminar</button>
                    
                </div>
            </div>
            )
        setCarritoLocal(prodMostrar)
    }, [carrito])


    const app =(carrito.length != 0) ? <> <div className='row'> {carritoLocal} </div>  <li> <Link className="nav-link mt-5 mx-5" to="/"><button className='btn btn-dark'><i className="fa-solid fa-house"></i></button></Link></li> </>  : <> <h1>No existen elementos en el carrito</h1>  <li> <Link className="nav-link mt-5 mx-5" to="/"><button className='btn btn-dark'><i className="fa-solid fa-house"></i></button></Link> </li></>
        return app
}
    


export default Carrito;
                                                                                                                        