import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom'
import DetalleProducto from './DetalleProducto';
import { DarkModeContext } from '../../context/darkModeContext';
import { getProducto } from '../utils/firebase';



const Producto = () => {
    const [producto, setProducto] = useState([])
    const {id} = useParams()
    const {darkMode} = useContext(DarkModeContext);
    useEffect(() => {
        getProducto(id).then(prod => {
            setProducto([prod.id, prod.data()])
        })
        })
   

        if(producto.length != 0){

            return (
                <>
                    <div className={darkMode ? 'darkMode card mb-3' : 'card mb-3'}>
                        
                         { <DetalleProducto producto={producto}/> }
                    </div>
                </>
            );


        }
}

export default Producto;

// .then(productos => {
//     const producto1 = productos.find(productoArray => productoArray.id == id)
//     setProducto(producto1)
