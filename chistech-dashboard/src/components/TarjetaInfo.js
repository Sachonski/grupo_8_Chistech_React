import React, { useState, useEffect } from 'react'



function TarjetaInfo(props) {
    let [producto, setProducto] = useState([])

    function TotalProductos () {
        fetch(`http://localhost:3030/api/products`)
                .then(res => res.json())
    }

    useEffect(() => {
            props.funcion() 
            .then(res => {
                const { meta } = res
                setProducto(meta.total)
                console.log(producto);
            }).catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <React.Fragment>
            <div className='tarjetaInfo'>
                <header>
                    <h2>{props.titulo}</h2>
                </header>
                <div>
                    <p>{producto}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TarjetaInfo