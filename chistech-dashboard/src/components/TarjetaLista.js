import React from 'react'
// import {Link , Route , Switch} from 'react-router-dom'

function TarjetaLista(props) {
    return (
        <React.Fragment>
            <div className='tarjetaLista'>
                <header>
                    <h3>
                        {props.titulo} Titulo
                    </h3>
                </header>

                <ul>
                    <li>{props.item}Lista1</li>
                </ul>

            </div>
        </React.Fragment>
    )
}

export default TarjetaLista