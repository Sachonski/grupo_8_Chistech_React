import React, { useState, useEffect } from 'react'
import getData from '../services/getData';
const urlUsuarios = `users`;
let users = [];

function Usuarios() {
    const inicio = { info: '', array: [] };

    let [valor, setValor] = useState(inicio);
    useEffect(() => {

        let Administrador = "No";
        getData(urlUsuarios)
        .then(res => {
            const obj = {
                array: res.data.map(item => item)
                
            }
            users = obj.array
            setValor(obj)
        })

    }, []);

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
                    {users.map((user,index) => <tr key= {index}>
                        <td>{user.user_name}</td>
                        <td>{user.first_name}{" "}{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.admin ? "Si" : "No"}</td>
                    </tr>)}
                </tbody>
                {/* termina componente detalle */}
            </table>
        </React.Fragment>
    );
}

export default Usuarios
