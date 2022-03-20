import React from 'react';
import TarjetaInfo from './TarjetaInfo'

function SeccionSuperior() {
    return (
        <React.Fragment>
            <div className='barraSuperior'>
            <TarjetaInfo />
            <TarjetaInfo />
            <TarjetaInfo />
            </div>
        </React.Fragment>
    )
}

export default SeccionSuperior