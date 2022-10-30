
import { initializeApp } from "firebase/app";
import {collection, addDoc, getFirestore, getDocs, getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'
// "AIzaSyAKWTVyXMCCfLstblPDRiaLwZz6xTnG7mU"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-34755-2022-2368e.firebaseapp.com",
  projectId: "react-34755-2022-2368e",
  storageBucket: "react-34755-2022-2368e.appspot.com",
  messagingSenderId: "134731381409",
  appId: "1:134731381409:web:ea43706ed3439dfb610ee0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

const cargarBaseDeDatos = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach( async (producto) => {
        await addDoc(collection(db,"productos"), {
            nombre: producto.nombre,
            material: producto.material,
            categoria: producto.nombreCategoria,
            stock: producto.stock,
            img1: producto.img1,
            img2: producto.img2,
            img3: producto.img3,
            precio: producto.precio,
            cuotas: producto.cuotas,
        })  
    })
}

const getProducto = async (id) => {
    const  producto = await getDoc(doc(db, "productos", id))
    return producto
}

const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(producto => [producto.id, producto.data()])
   
    return items
}

const updateProducto = async (id, info) => {
    const estado = await getDoc(doc(db, "productos", id), info)
    return estado 
}

const deleteProducto = async(id) => {
    const estado = await deleteDoc(doc(db, "productos", id))
    return estado


}

const createProducto = async (objProd) => {
    const estado = await addDoc(collection(db, "productos"), {
            nombre: objProd.nombre,
            material: objProd.material,
            categoria: objProd.nombreCategoria,
            stock: objProd.stock,
            img1: objProd.img1,
            img2: objProd.img2,
            img3: objProd.img3,
            precio: objProd.precio,
            cuotas: objProd.cuotas,
    })
    return estado
}
const createOrdenCompra = async (preTotal, nombre, apellido, email, dni, direccion) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        nombre: nombre,
        apellido: apellido,
        email: email,
        dni: dni,
        direccion: direccion,
        precioTotal: preTotal
    })
    return ordenCompra
}

const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    return ordenCompra
}


export {cargarBaseDeDatos, getProductos, getProducto, updateProducto, deleteProducto, createProducto, createOrdenCompra, getOrdenCompra}
