import React, {useState} from 'react';

const Prueba = () => {
    const [state, setState] = useState(0)
   
    return (
        <>
          <button className='btn btn-dark' onClick={()=>{setState(state + 1)}}>Clickeame</button>
          <p>Hiciste {state} Click/s</p>
        </>
    );
}

export default Prueba;
