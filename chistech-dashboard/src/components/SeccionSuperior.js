import React from 'react';
import TarjetaInfo from './TarjetaInfo'
// import {Link , Route , Switch} from 'react-router-dom'

function SeccionSuperior() {
    return (
        <React.Fragment>
            <div className='barraSuperior'>
            <TarjetaInfo 
            titulo = "Productos"
            link = "MAS INFO"
            /> {/*productos*/}
            <TarjetaInfo 
            titulo = "Usuarios"
            link = "MAS INFO"
            /> {/*Usuarios*/}
            <TarjetaInfo 
            titulo = "Categorias"
            link = "MAS INFO"
            /> {/*Categorias*/}
            </div>
        </React.Fragment>
    )
}

export default SeccionSuperior