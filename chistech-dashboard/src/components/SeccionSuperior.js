import React from 'react';
import TarjetaInfo from './TarjetaInfo'
// import {Link , Route , Switch} from 'react-router-dom'

function SeccionSuperior() {
    return (
        <React.Fragment>
            <div className='barraSuperior'>
            <TarjetaInfo 
            titulo = "Productos"
            /> {/*productos*/}
            <TarjetaInfo 
            titulo = "Usuarios"
            /> {/*Usuarios*/}
            <TarjetaInfo 
            titulo = "Categorias"
            /> {/*Categorias*/}
            </div>
        </React.Fragment>
    )
}

export default SeccionSuperior