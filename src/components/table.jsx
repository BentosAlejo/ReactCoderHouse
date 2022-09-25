import React from 'react';

const Table = () => {
    return (
        <>
            <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">$1.900.000</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-secondary">
                        <th scope="row">3 cuotas sin interes de $633.333,333</th>
                        <td>Envios worldwide</td>
                        <td><button className='btn btn-dark'>Calcular envio</button></td>
                        </tr>
                    </tbody>
                </table>
        </>
    );
}

export default Table;
