import React from 'react'
import getData from '../services/getData';
const urlProductos = `products`;
let products = [];

function Productos() {
    getData(urlProductos)
        .then(res => {
            const obj2 = {
                array: res.data.map(item => item)
            }
            products = obj2.array
            console.log(products);
        })

    return (
        <React.Fragment>
            <h1 className='headDetalle'>Productos</h1>
            <table>
                {/* comienza componente detalle */}
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Descuento</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => <tr>
                        <td>{product.name}</td>
                        <td>{"$ "}{product.price}</td>
                        <td>{product.discount}{"%"}</td>
                        <td>{product.stock}</td>
                    </tr>)}
                </tbody>
                {/* termina componente detalle */}
            </table>
        </React.Fragment>
    );
}

export default Productos
