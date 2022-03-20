import React from 'react';
import BarraLateral from './BarraLateral'
import TablaDetalles from './TablaDetalles'

function SeccionInferior() {
    return (
        <React.Fragment>
            <div className='barraInferior'>
            <BarraLateral />
            <TablaDetalles />
            </div>
        </React.Fragment>
    )
}

export default SeccionInferior 