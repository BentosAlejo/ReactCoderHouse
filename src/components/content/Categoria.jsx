import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { consultarBDD } from '../utils/funcionesUtiles'
import {Link} from 'react-router-dom'

const Categoria = () => {


    const [productos, setProductos] = useState([])
    const {id} = useParams()
    console.log(id)
    
    useEffect(() => {
        consultarBDD('../json/productos.json').then(productos => {
            const productosCategoria = productos.filter(producto => producto.nombreCategoria == id)
            setProductos(productosCategoria)
            
        
            
                
                
                
        })      
        }, [id])

    
    return (
        <div className='row'>
            
            {productos.map(producto => 
                
                <div className="card cardProducto animate__animated animate__pulse" key={producto.id}>
                <img src={"../media/" + producto.img1} className="card-img-top" alt={producto.nombre} />
                 <div className="card-body">
                     <h5 className="card-title">{producto.nombre}</h5>
                     <p className="card-text">{producto.material}</p>
                     <p className="card-text">{producto.precio}</p>
                     <p className="card-text">{producto.cuotas}</p>
                     <button className="btn btn-dark"><Link className='nav-link' to={"/producto/" + producto.id}>Ver Producto</Link></button>
                 </div>
             </div>)}
        </div>
    );
}

export default Categoria;


