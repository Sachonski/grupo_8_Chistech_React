import React from 'react';


function Productos() {
    return (
        <React.Fragment>
            <h1 className='headDetalle'>Productos</h1>
            <table>
                {/* comienza componente detalle */}
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Stock</th>
                        <th>Precio</th>
                        <th>Ventas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Queso Duro</td>
                        <td>1</td>
                        <td>$10</td>
                        <td>$100</td>
                    </tr>
                </tbody>
                {/* termina componente detalle */}
            </table>

        </React.Fragment>
    );
}

export default Productos