import React, {useState, useEffect} from 'react';
import { consultarBDD } from '../utils/funcionesUtiles';
import {Link} from 'react-router-dom'


const Home = () => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        consultarBDD('./json/productos.json').then(productos => {
            setProductos(productos)
    })
           
        
       
    }, []);

    return (
        <div className='row'>
             {productos.map(producto => {
                return(
                            <div className="card cardProducto animate__animated animate__backInDown" key={producto.id}>
                               <img src={"./media/" + producto.img1} className="card-img-top" alt={producto.nombre} />
                                <div className="card-body">
                                    <h5 className="card-title">{producto.nombre}</h5>
                                    <p className="card-text">{producto.material}</p>
                                    <p className="card-text">{producto.precio}</p>
                                    <p className="card-text">{producto.cuotas}</p>
                                    <button className="btn btn-dark"><Link className='nav-link' to={"/producto/" + producto.id}>Ver Producto</Link></button>
                                </div>
                            </div>)})}
                           
        </div>
    );
}
    
    export default Home;


