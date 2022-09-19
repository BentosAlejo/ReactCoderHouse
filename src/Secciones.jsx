import React from 'react';

const Secciones = () => {
    return (
        <>
            <li className="nav-item">
                <a className="nav-link active" href="#">
                  PIMP LUXURY
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Custom
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
        </>
    );
}

export default Secciones;
