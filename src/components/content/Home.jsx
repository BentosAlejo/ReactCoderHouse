import React, {useState, useEffect, useContext} from 'react';
import { getProductos } from '../utils/firebase.js';
import { DarkModeContext } from '../../context/darkModeContext';
import {Link} from 'react-router-dom'



const Home = () => {
    const [productos, setProductos] = useState([])
    const {darkMode} = useContext(DarkModeContext);
  
    useEffect(() => {
           getProductos().then(prod => {
               
               setProductos(prod)

           })
         
    }, []);
    

    return (
       <>
       
       <div className={darkMode ? 'darkMode row' : 'row'}>
       
             {  productos.map(producto => {
                    return(
                            <div className="card cardProducto animate__animated animate__backInDown" key={producto[0]}>
                               
                               <img src={producto[1].img1} className="card-img-top" alt={producto.nombre} />
                                <div className="card-body">
                                    <h5 className="card-title">{producto[1].nombre}</h5>
                                    <p className="card-text">{producto[1].material}</p>
                                    <p className="card-text">{producto[1].precio}</p>
                                    <p className="card-text">{producto[1].cuotas}</p>
                                    <button className="btn btn-dark"><Link className='nav-link' to={"/producto/" + producto[0]}>Ver Producto</Link></button>
                                </div>
                            </div>)}) }
                           
        </div>
       
       </>
    );
}
    
    export default Home;


