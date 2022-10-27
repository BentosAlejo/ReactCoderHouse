
import { initializeApp } from "firebase/app";
import {collection, addDoc, getFirestore, getDocs, getDoc, doc } from 'firebase/firestore'
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

export {cargarBaseDeDatos, getProductos, getProducto}
