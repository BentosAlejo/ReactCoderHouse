import React, {useState} from 'react';

const ItemCount4 = () => {
    const [contador, setContador] = useState(1)
    function modificarContador(operacion){
        if(operacion == "+"){
            setContador(contador + 1)
        }else{
            if(contador > 1){
                setContador(contador - 1)
            }
        }
    }
    return (
        <div className="card border-secondary mb-3" style={{ maxWidth: "20rem" }}>
            <div className="card-header">Chain de Dios</div>
            <div className="card-body">
                <p>Cantidad</p>    
                <button className='btn' onClick={() =>{modificarContador("-")}}>-</button>
                <button className='btn btn-secondary' data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">{contador}</button>
                <button className='btn' onClick={() =>{modificarContador("+")}}>+</button>
            </div>
        </div>
        
    );
}

export default ItemCount4;
