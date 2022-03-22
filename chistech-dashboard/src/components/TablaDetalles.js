import React from 'react'
// import {Link , Route , Switch} from 'react-router-dom'

function TablaDetalle() {
    return (
        <React.Fragment>
            <div className='tablaDetalle'>
                <h2>Detalle</h2>
                <table>
                    {/**! comienza componente detalle */}
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
                    {/**! termina componente detalle */}
                </table>
            </div>
        </React.Fragment>
    )
}

export default TablaDetalle