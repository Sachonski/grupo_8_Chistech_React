import React from 'react';
import TarjetaInfo from './TarjetaLista'
// import {Link , Route , Switch} from 'react-router-dom'

function SeccionSuperior() {
    return (
        <React.Fragment>
            <div className='barraSuperior'>
            <TarjetaInfo /> {/*Productos*/}
            <TarjetaInfo /> {/*Usuarios(clientes y admins)*/}
            <TarjetaInfo /> {/*Categorias*/}
            </div>
        </React.Fragment>
    )
}

export default SeccionSuperior