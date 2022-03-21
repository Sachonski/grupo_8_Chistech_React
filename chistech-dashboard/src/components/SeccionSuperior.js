import React from 'react';
import TarjetaInfo from './TarjetaInfo'
// import {Link , Route , Switch} from 'react-router-dom'

function SeccionSuperior() {
    return (
        <React.Fragment>
            <div className='barraSuperior'>
            <TarjetaInfo 
            titulo = "Productos"
            link = "mas info"
            /> {/*productos*/}
            <TarjetaInfo 
            titulo = "Usuarios"
            link = "mas info"
            /> {/*Usuarios*/}
            <TarjetaInfo 
            titulo = "Categorias"
            link = "mas info"
            /> {/*Categorias*/}
            </div>
        </React.Fragment>
    )
}

export default SeccionSuperior