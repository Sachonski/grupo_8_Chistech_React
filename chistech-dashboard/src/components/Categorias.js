import React from 'react'
import getData from '../services/getData';
const urlCategorias = `sales/category`;
let categories = [];

function Categorias() {
    getData(urlCategorias)
        .then(res => {
            const obj3 = {
                array: res.data.map(item => item)
            }
            categories = obj3.array
            console.log(categories);
        })

    return (
        <React.Fragment>
            <h1 className='headDetalle'>Categorias</h1>
            <table>
                {/* comienza componente detalle */}
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => <tr>
                        <td>{category.id}</td>
                        <td>{category.name}</td>
                    </tr>)}
                </tbody>
                {/* termina componente detalle */}
            </table>
        </React.Fragment>
    );
}

export default Categorias


