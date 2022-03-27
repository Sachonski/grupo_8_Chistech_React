import React from 'react'
import Productos from './Productos.js'
import Usuarios from './Usuarios'
import Categorias from './Categorias'
import {Route} from 'react-router-dom'


function TablaDetalle() {
    return (
        <React.Fragment>
            <div className='tablaDetalle'>
                <Route path='/' exact= {true} component = {Productos}/>
                <Route path='/Productos' exact= {true} component = {Productos}/>
                <Route path='/Usuarios' exact= {true} component = {Usuarios}/>
                <Route path='/Categorias' exact= {true} component = {Categorias}/>
            </div>
        </React.Fragment>
    )
}

export default TablaDetalle