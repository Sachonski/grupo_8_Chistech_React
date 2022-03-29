import React from 'react'
import getData from '../services/getData';
const urlUsuarios = `users`;
let users = [];

function Usuarios() {
    getData(urlUsuarios)
        .then(res => {
            const obj = {
                array: res.data.map(item => item)
            }
            users = obj.array
            console.log(users);
        })

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
                    {users.map(user => <tr>
                        <td>{user.user_name}</td>
                        <td>{user.first_name}{" "}{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.admin}</td>
                    </tr>)}
                </tbody>
                {/* termina componente detalle */}
            </table>
        </React.Fragment>
    );
}

export default Usuarios
