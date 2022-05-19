import React from 'react'
import { Item } from './Item'
import "./itemlist.css"

export const ItemList = ({products}) => {
console.log(products)
  return (
    <ul className='itemlist'>
        {
            products.map(p => {
                return <Item product={p} />
            })
        }
    </ul>
  )
}
