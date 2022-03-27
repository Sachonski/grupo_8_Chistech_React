import React from 'react';


function Categorias() {
    return (
        <React.Fragment>
            <h1 className='headDetalle'>Categorias</h1>
            <table>
                {/* comienza componente detalle */}
                <thead>
                    <tr>
                        <th>Id categoria</th>
                        <th>Categoria</th>
                        <th>Productos c/stock</th>
                        <th>Productos s/stock</th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Quesos Frescos</td>
                        <td>14</td>
                        <td>4</td>
                    </tr>
                  
                </tbody>
                {/* termina componente detalle */}
            </table>
        </React.Fragment>
    );
}

export default Categorias