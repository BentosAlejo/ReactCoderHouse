
// import React, {useState, useEffect} from 'react';

// const Dolar = () => {
// //     const productos = [

// //         {id:1, nombre:"Oro", marca:"420", precio:700, stock:27},
// //         {id:2, nombre:"Plata", marca:"18", precio:500, stock:78},
// //         {id:3, nombre:"Cobalto", marca:"SV", precio:230, stock:26},
// //         {id:4, nombre:"Diamante", marca:"GL", precio:900, stock:45},
// //         {id:5, nombre:"Vermeil", marca:"DR", precio:250, stock:20}

// //     ]
// //     const consultaBDD = (habilitado) => {
// //         return new Promise((resolve,reject) =>{
// //             if(habilitado){
// //                 resolve(productos)
// //             }else{
// //                 reject("No habilitado")
// //             }
// //         })
//     const [dolar, setDolar] = useState([])
//     useEffect(() =>{
//         const consultarApi = () =>{
//             fetch('https://criptoya.com/api/dolar')
//             .then(response => response.json())
//             .then(({blue, ccb, ccl, mep}) => {
//                 setDolar(Object.entries({blue, ccb, ccl}).map((moneda, indice) => <p key={indice}>Tipo: {moneda[0]} - ${moneda[1]}</p>))
//             })
//         } 
//         consultarApi()
//         setInterval(() => {
//             consultarApi()
//             console.log("pase")
//         }, 10000)
//         //console.log(dolar)
        
//     }, []);

    

// //     consultaBDD(true).then(data => console.log(data))

    
//     return (
//         <>
//             {dolar}
//         </>
//     );
// }

// export default Dolar;
