import React from 'react';
import {Link} from 'react-router-dom'


const Dropdown = ({lista}) => {
    
    return (
        <>  
            
           
            <li className="nav-item dropdown ">
                    
                            <a className="nav-link dropdown-toggle btn btn-dark" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa-solid fa-circle-caret-down"></i></a>
                           
                            <div className="dropdown-menu">
                             
                            {lista.map(e => (
                                    <Link key={e} className='dropdown-item' to={`/categoria/${e}`}>{e}</Link>
                                    
                                    ))}
                   
                            </div>
            </li>

            
        </>
    );
}

export default Dropdown;
