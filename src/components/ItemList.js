import React from 'react'
import { Item } from './Item'
import "./itemlist.css"
export const ItemList = ({products}) => {
  return (
    <div>
        {
            products.map(p => {
                return <Item product={p} />
            })
        }
    </div>
  )
}
