import React from 'react';

const Table5 = () => {
    return (
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">$35.000</th>
                </tr>
            </thead>
            <tbody>
                <tr class="table-secondary">
                <th scope="row">6 cuotas  de $7.500</th>
                <td>Envios worldwide</td>
                <td><button className='btn btn-dark'>Calcular envio</button></td>
                </tr>
            </tbody>
         </table>
    );
}

export default Table5;
