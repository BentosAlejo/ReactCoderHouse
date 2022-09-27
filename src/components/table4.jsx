import React from 'react';

const Table4 = () => {
    return (
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">$80.000</th>
                </tr>
            </thead>
            <tbody>
                <tr class="table-secondary">
                <th scope="row">6 cuotas  de $15.000</th>
                <td>Envios worldwide</td>
                <td><button className='btn btn-dark'>Calcular envio</button></td>
                </tr>
            </tbody>
         </table>
    );
}

export default Table4;
