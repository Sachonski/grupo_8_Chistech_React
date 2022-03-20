import React from 'react';
import TarjetaInfo from './TarjetaInfo'

function BarraLateral() {
    return (
        <React.Fragment>
            <div className='barraLateral'>
            <TarjetaInfo />
            <TarjetaInfo />
            <TarjetaInfo />
            <TarjetaInfo />
            <TarjetaInfo />
            </div>
        </React.Fragment>
    )
}

export default BarraLateral