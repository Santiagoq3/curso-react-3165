import React from 'react'
import { Link } from 'react-router-dom'
import "./item.css"
export const Item = ({product}) => {
    console.log(product)
  return (
    <li className='product'>
        <img src={product.img} />
        <Link to={`/item/${product.id}`}>
          <div className='product__container'>
            <div className='product__container-top'>
              <h3>{product.name}</h3>
              <p>{product.precio} $</p>
            </div>
            <p className='product__container-category'>Categoria: {product.categoria}</p>
          </div>
        </Link>
    </li>
  )
}
