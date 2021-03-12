import React, { Fragment, useState } from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Producto from './Components/Producto'
import Carritocompras from './Components/Carritocompras'

function App() {

  //Crear listado de productos
  const [ productos, setProductos ] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'Camisa VueJS', precio: 40 },
    { id: 3, nombre: 'Camisa NodeJS', precio: 30 },
    { id: 4, nombre: 'Camisa Angular', precio: 20 },
  ]);

  //State para un carrito de compras
  const [ carrito, agregarProducto] = useState([]);

  //Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        titulo='Tienda Virtual'
      />

      <h1>Lista de Productos</h1>
      {productos.map(producto => (
        <Producto 
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}

      <Carritocompras 
        carrito={carrito}
        agregarProducto={agregarProducto}
      />

      <Footer 
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App