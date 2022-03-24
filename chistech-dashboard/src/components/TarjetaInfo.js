/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from 'react'
import getData from '../services/getData';
import { Link } from 'react-router-dom'


const urlProductos = `products`;
const urlUsuarios = `users`;
const urlVentas = `sales`;
const urlVentasTotales = `sales/sales`;
const urlTop5 = `sales/top5`;
const urlUltimosProducto = `sales/last`;
const urlCategorias = `sales/category`



function TarjetaInfo(props) {
    const inicio = { info: '', array: [] };

    let [valor, setValor] = useState(inicio);

    const strategies = {

        Categorias: () => getData(urlCategorias)
            .then(res => {
                const obj = {
                    info: res.meta.total,
                    array: res.data.map(item => item.name)
                }
                setValor(obj);
            }),
        // .catch((e) => { console.log(e) }),

        Productos: () => getData(urlProductos)
            .then(res => {
                const obj = {
                    info: res.meta.total
                }
                const data = res.data;
                const arrayStock = data.filter(item => item.stock === 1);
                const StockTotal = arrayStock.length;
                const sinStockTotal = data.length - StockTotal;
                obj.array = [`Sin Stock: ${sinStockTotal}`, `En Stock: ${StockTotal}`];
                setValor(obj);
            }),
        // .catch((e) => { console.log(e) }),

        "Ultimo Producto Agregado": () => getData(urlProductos)
            .then(res => {
                const obj = {
                    info: "",
                    array: [`${res.data[res.meta.total - 1].name}`]
                };
                setValor(obj)
            }),
        // .catch((e) => { console.log(e) }),

        Usuarios: () => getData(urlUsuarios)
            .then(res => {
                const obj = {
                    info: res.meta.total
                }
                const data = res.data;
                const arrayAdmin = data.filter(item => item.admin === 1);
                const adminTotal = arrayAdmin.length;
                const clientesTotal = data.length - adminTotal;
                obj.array = [`Clientes: ${clientesTotal}`, `Administradores: ${adminTotal}`];
                setValor(obj);
            }),
        // .catch((e) => { console.log(e) }),

        'Cantidad de Productos Vendidos': () => getData(urlVentas)
            .then(res => {
                const total = {
                    info: '',
                    array: [res.meta.total]
                };
                setValor(total);
            }),
        // .catch((e) => { console.log(e) }),

        'Cantidad de Ventas': () => getData(urlVentasTotales)
            .then(res => {
                const total = {
                    info: '',
                    array: [res.meta.total]
                };
                setValor(total);
            }),
        // .catch((e) => { console.log(e) }),

        'Top 5 de Productos': () => getData(urlTop5)
            .then(res => {
                const top5 = { 
                    info : '', 
                    array : res.data[0].map(it => it.name)
                };
                setValor(top5)
            }),
        // .catch((e) => { console.log(e) }),

        'Ultimas 5 Ventas': () => getData(urlUltimosProducto)
            .then(res => {
                const ultimas = { 
                    info : '',
                    array : res.data.map(it => `Factura: ${it.invoice}`)
                };
                setValor(ultimas)
            })
            // .catch((e) => { console.log('error en ventas', e) })
    }

    useEffect(() => {
        if (props.titulo) {
            strategies[props.titulo]()
            .catch((e) => { console.log('error en ventas', e) });
        }
    }, []);


    return (
        <React.Fragment>
            <div className="tarjetaInfo">
                <header>
                    <h2>{props.titulo}</h2>
                    <h3>{valor.info}</h3>
                    <Link to={props.titulo} className='link'>{props.link}</Link>
                </header>
                <div>
                    <ul>
                        {valor.array.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>

            </div>
        </React.Fragment>
    )
}

export default TarjetaInfo