import React from 'react';
import TarjetaInfo from './TarjetaInfo'
import TarjetaLista from './TarjetaLista'
// import {Link , Route , Switch} from 'react-router-dom'

function BarraLateral() {
    return (
        <React.Fragment>
            <div className='barraLateral'>
            <TarjetaInfo 
            titulo = "Ultimo Producto Agregado"
            funcion = "TotalProductos()"
            /> {/*ultimo producto agregado*/}
            <TarjetaInfo
            titulo = 'Cantidad de Productos Vendidos'
            /> {/* cantidad de productos vendidos*/}
            <TarjetaInfo 
            titulo = 'Cantidad de Ventas'
            /> {/*cantidad de ventas*/}
            <TarjetaLista
            titulo = 'Top 5 de Productos' 
            /> {/*top 5 de productos*/}
            <TarjetaLista
            titulo = 'Ultimas 5 Ventas' 
            /> {/* ultimas 5 ventas */}
            </div>
        </React.Fragment>
    )
}

export default BarraLateral