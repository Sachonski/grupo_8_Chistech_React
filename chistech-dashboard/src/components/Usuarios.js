import React, { useState, useEffect } from 'react'
import getData from '../services/getData';
import { Link } from 'react-router-dom'
const urlUsuarios = `users`;
let cosito = [];

function Usuarios(props) {

    const inicio = {array: [] };
        
    getData(urlUsuarios)
        .then(res =>   {
            const obj = {
                              
                array: res.data.map(item => item)
            }
            const data = res.data;
           
            cosito = obj.array
            
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
                {/* termina componente detalle */}
            </table>

        </React.Fragment>
    );
}

export default Usuarios
