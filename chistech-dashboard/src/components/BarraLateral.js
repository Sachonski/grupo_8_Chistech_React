import React from 'react';
import TarjetaInfo from './TarjetaInfo'
// import {Link , Route , Switch} from 'react-router-dom'

function BarraLateral() {
    return (
        <React.Fragment>
            <div className='barraLateral'>
            <TarjetaInfo 
            titulo = "Ultimo Producto Agregado"
            tipo = 'info'
            /> {/*ultimo producto agregado*/}
            <TarjetaInfo
            titulo = 'Cantidad de Productos Vendidos'
            tipo = 'info'
            /> {/* cantidad de productos vendidos*/}
            <TarjetaInfo 
            titulo = 'Cantidad de Ventas'
            tipo = 'info'
            /> {/*cantidad de ventas*/}
            <TarjetaInfo
            titulo = 'Top 5 de Productos' 
            tipo = 'lista'
            /> {/*top 5 de productos*/}
            <TarjetaInfo
            titulo = 'Ultimas 5 Ventas' 
            tipo = 'lista'
            /> {/* ultimas 5 ventas */}
            </div>
        </React.Fragment>
    )
}

export default BarraLateral