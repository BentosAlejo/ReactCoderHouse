import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/styles/index.css'
import { CarritoProvider } from './components/content/CarritoContext';
import App from './components/App';

// import './components/utils/x.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <CarritoProvider>

        <App />
    </CarritoProvider>
  
);



