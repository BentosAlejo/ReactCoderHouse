import React, {useState, useEffect, useContext} from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { consultarBDD } from '../utils/funcionesUtiles';


const About = () => {
  const [clientes, setCliente] = useState([])
  const {darkMode} = useContext(DarkModeContext);
   
  useEffect(() => {
    consultarBDD('../json/clientes.json').then(cliente => {
        
        setCliente(cliente)

    })
  
}, []);

    return (
        <>
          <section className='alert alert-dismissible alert-warning mt-5'>
            <p id='about'>   
                  Así como la flor de loto nace en el pantano más contaminado y lo inunda de su fragancia, Pimp Luxury nació para representar la joyería hecha con arte técnica y pasión.

                  Si no estuviéramos enamorados de la joyería no lo hubiéramos logrado.

                  Las joyas representan los momentos más importantes de nuestras vidas, solo un experto consciente de esta realidad, puede dar lo máximo de sí en la creación de piezas que van a perdurar por siempre.

                  Trabajamos con las materias primas más caras y difíciles de conseguir en el mercado mundial.

                  Sabemos de colegas que no valoran el esfuerzo y sacrificio de tantas personas y recursos en conseguirlos, sacando al mercado joyería de mala calidad.

                  Es importante que sepan la diferencia entre algo costoso y algo bien trabajado, el trabajo bien hecho no hace la pieza más costosa, mientras que los trabajos inexpertos transforman a las joyas en algo con poco valor.

                  Si quisieran saber algo sobre nosotros, lo más importante a saber: no concebimos una vida sin dedicarnos a la joyería fina.
            </p>
          </section>
            <h1 className='mx-5'>Nuestros clientes</h1>
          <article  className={darkMode ? 'darkMode row' : 'row'}>
            {clientes.map(cliente => {
              return(

                    <div className="card about mx-5 mt-5" >
                        <img src={cliente.img} className="card-img-top" alt={cliente.nombre}/>
                        <div className="card-body">
                          <h5 className="card-title">{cliente.nombre}</h5>
                          <p className="card-text">{cliente.comentario}</p>
                        </div>
                    </div>
              )
            })}
          
              
          </article>
        </>
    );
}


export default About;
