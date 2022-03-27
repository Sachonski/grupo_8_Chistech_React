import React, { useState, useEffect } from 'react'
import getData from '../services/getData';
import { Link } from 'react-router-dom'
const urlUsuarios = `users`;


function Usuarios(props) {

    const inicio = { info: '', array: [] };
    let [valor, setValor] = useState(inicio);
    let datita = [];
    fetch(urlUsuarios)
        .then(res =>   {
            const obj = {
                
                info: res.meta.total,
                array: res.data.map(item => item.name)
            
            }
            const data = res.data;
            setValor(obj);
            console.log(res.data)
        }
    )
 
  
    return (
        <React.Fragment>
            <h1 className='headDetalle'>Usuarios</h1>
            <table>
                {/* comienza componente detalle */}
                <thead>
                    <tr>
                        <th>Usuario</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Admin</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
                
            </table>

        </React.Fragment>
    );
}

export default Usuarios
