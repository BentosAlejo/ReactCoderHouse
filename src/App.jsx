import React from 'react';
import './App.css'
import Navbar from './componentes/Navbar';
import Form from './componentes/Form';


const App = () => {
  return (
    <>
      <Navbar/>
      <Form busqueda="Buscar usuario"/>

    </>
  );
}

export default App;

