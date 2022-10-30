import { createProducto, getProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra } from "./firebase";


// const producto = {"nombreCategoria":"Chains", "nombre":"Chain de Dios", "material":"Oro", "precio": 1370000, "cuotas":"3 cuotas sin interes de $456.666,667" , "img1":"https://firebasestorage.googleapis.com/v0/b/react-34755-2022-2368e.appspot.com/o/imagenes%2Fchain-god-1.jpg?alt=media&token=b2125c83-87d3-4358-8aa0-e9e42e6f595f", "img2":"https://firebasestorage.googleapis.com/v0/b/react-34755-2022-2368e.appspot.com/o/imagenes%2Fchain-god-2.jpg?alt=media&token=1e9964c0-a25c-4dfb-8d16-6522a8cc6ff9", "img3":"https://firebasestorage.googleapis.com/v0/b/react-34755-2022-2368e.appspot.com/o/imagenes%2Fchain-god-3.jpg?alt=media&token=802fd828-9f60-45aa-856d-2f862aa9ec6c", "stock":6}
// //createProducto(producto).then(estado => console.log(estado))

// getProducto("2Ksq3fWGTUZwRJi5FOrE").then(producto => {
    
//     const prod = producto[1]
//     prod.stock -= 2
// //     updateProducto("2Ksq3fWGTUZwRJi5FOrE", prod)

// // })

// deleteProducto("aYtNo6B6SiWBC6KhNfXx").then(estado => {
//     console.log(estado)
// })


createOrdenCompra(120000, "Jax", "Pilking", "pkjax@g.com", 33322, "groovest").then(orden => {
    console.log(orden)
})