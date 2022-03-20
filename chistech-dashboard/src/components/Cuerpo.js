import React from 'react';
import SeccionInferior from './SeccionInferior'
import SeccionSuperior from './SeccionSuperior'

function Cuerpo() {
    return (
        <React.Fragment>
            <SeccionSuperior />
            <SeccionInferior />
        </React.Fragment>
    );
}

export default Cuerpo