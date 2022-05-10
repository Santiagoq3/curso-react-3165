import React, { useState } from 'react'
import "./itemcount.css"



export const ItemCount = ({initial,stock,onAdd}) => {

    const [count, setcount] = useState(initial)


    const handleAdd = ()=>{
        if(count < stock){
            setcount(count + 1)
        }
    }

    const handleSubstract = ()=>{
        if(count > initial){
            setcount(count - 1)
        }
    }

  return (
    <div className='itemcount'>
        <div className='itemcount__actions'>
            <button onClick={handleSubstract}>-</button>
            <span>{count}</span>
            <button onClick={handleAdd}>+</button>
        </div>
        <button className='itemcount__btn-cart' onClick={onAdd}>
            Agregar al carrito
        </button>
    </div>
  )
}
