import React from 'react'
import { ItemCount } from './ItemCount'
import "./itemdetail.css"
export const ItemDetail = ({product}) => {

    console.log(product)

    const onAdd = ()=>{
        console.log("producto agregado al carrito")
    }
  return (
    <div className='itemdetail'>
        <img src={product.img}  />
        <div className='itemdetail-producto'>     
            <h2 className='itemdetail-producto-nombre'>  {product.name}  </h2>
            <p className='itemdetail-producto-precio'>  {product.precio}$   </p>
            <p>{product.descripcion}</p>
            <p className='itemdetail-producto-descripcion'>{product.categoria}</p>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>
    </div>
  )
}
