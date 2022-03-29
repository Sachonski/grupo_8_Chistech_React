import React, { useState, useEffect } from 'react'
import getData from '../services/getData';
const urlCategorias = `sales/category`;
let categories = [];

function Categorias(props) {

    const inicio = { info: '', array: [] };

    let [valor, setValor] = useState(inicio);

    useEffect(() => {
      
            getData(urlCategorias)
            .then(res => {
                const obj = {
                    array: res.data.map(item => item)
                }
                categories = obj.array
                setValor(obj);
            })

    }, []);


  

    return (
        <React.Fragment>
            <h1 className='headDetalle'>Categorias</h1>
            <table>
                {/* comienza componente detalle */}
                <thead>
                    <tr>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category,index )=> <tr key = {index}>
                        <td>{category.name}</td>
                    </tr>)}
                </tbody>
                {/* termina componente detalle */}
            </table>
        </React.Fragment>
    );
}



export default Categorias


