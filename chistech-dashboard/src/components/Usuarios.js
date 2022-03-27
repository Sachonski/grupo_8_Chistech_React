import React from 'react';


function Usuarios() {
    return (
        <React.Fragment>
            <h1 className='headDetalle'>Usuarios</h1>
            <table>
                {/* comienza componente detalle */}
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Queso Duro</td>
                        <td>1</td>
                        <td>$10</td>
                        <td>$10</td>
                    </tr>
                    <tr>
                        <td>Queso Duro</td>
                        <td>1</td>
                        <td>$10</td>
                        <td>$10</td>
                    </tr>
                </tbody>
                {/* termina componente detalle */}
            </table>

        </React.Fragment>
    );
}

export default Usuarios