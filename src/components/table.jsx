import React from 'react';

const Table = () => {
    return (
        <>
            <table className='table table-hover'>
                    <thead>
                        <tr>
                        <th scope="col">$350.000</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='table-secondary'>
                        <th scope="row">3 cuotas sin interes de $116.666,667</th>
                        <td>Envios worldwide</td>
                        <td><button className='btn btn-dark'>Calcular envio</button></td>
                        </tr>
                    </tbody>
                </table>
        </>
    );
}

export default Table;
