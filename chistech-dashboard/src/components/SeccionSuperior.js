import React from 'react';
import TarjetaInfo from './TarjetaInfo'
// import {Link , Route , Switch} from 'react-router-dom'

function SeccionSuperior() {
    return (
        <React.Fragment>
            <div className='barraSuperior'>
            <TarjetaInfo 
            titulo = "Productos"
            tipo = 'lista'
            /> {/*productos*/}
            <TarjetaInfo 
            titulo = "Usuarios"
            tipo = 'lista'
            /> {/*Usuarios*/}
            <TarjetaInfo 
            titulo = "Categorias"
            tipo = 'lista'
            /> {/*Categorias*/}
            </div>
        </React.Fragment>
    )
}

export default SeccionSuperior