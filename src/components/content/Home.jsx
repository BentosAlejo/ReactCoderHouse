import React from 'react';

const Home = () => {
    const productos = [

        {id:1, nombre:"Oro", marca:"420", precio:700, stock:22},
        {id:1, nombre:"Plata", marca:"18", precio:500, stock:22},
        {id:1, nombre:"Cobalto", marca:"SV", precio:230, stock:22},
        {id:1, nombre:"Diamante", marca:"GL", precio:900, stock:22},
        {id:1, nombre:"Vermeil", marca:"DR", precio:250, stock:22}

    ]
    const consultaBDD = (habilitado) => {
        return new Promise((resolve,reject) =>{
            if(habilitado){
                resolve(productos)
            }else{
                reject("No habilitado")
            }
        })
    }
    consultaBDD(true).then(data => console.log(data))
    return (
        <>
        </>
    );
}

export default Home;
