import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCounts/ItemCount';
import Buttons from '../layouts/Buttons';
import Compras from '../layouts/compras';
import { consultarBDD } from '../utils/funcionesUtiles';
import DetalleProducto from './DetalleProducto';



const Producto = () => {
    const [producto, setProducto] = useState([])
    const {id} = useParams()
    useEffect(() => {
        fetch('../json/productos.json')
        .then(response => response.json())
        .then(productos => {
            const producto1 = productos.find(productoArray => productoArray.id == id)
            setProducto(producto1)
        })
    })
    return (
        <>
            <div className="card mb-3">
                <DetalleProducto producto={producto}/>
            </div>
            <ItemCount/>
        </>
    );
}

export default Producto;
