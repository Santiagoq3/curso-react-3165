import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemCount } from './ItemCount'
import { ItemDetailContainer } from './ItemDetailContainer'
import { ItemList } from './ItemList'
import "./itemlistcontainer.css"

const products =  [

  {
    name: "Teclado redragon",
    categoria: "teclados",
    id:1,
    img: "https://http2.mlstatic.com/D_NQ_NP_654842-MLA32722683116_102019-O.webp",
    precio:6000,
  },
  {
    name: "Auriculares redragon",
    categoria: "auriculares",
    id:2,
    img: "https://http2.mlstatic.com/D_NQ_NP_700257-MLA44366065265_122020-O.webp",
    precio:9000,
  },
]


const getProducts = new Promise((res,rej)=>{
  setTimeout(() => {
    res(products)
  }, 3000);
})

export const ItemListContainer = ({greeting}) => {

  const [products, setproducts] = useState([])
  const {idCategoria} = useParams()
  
  useEffect(()=>{

    if(idCategoria){
      getProducts
      .then(p=> {
        setproducts(p.filter(p => p.categoria == idCategoria))
      })
      .catch((err)=> console.log(err))
    }else{
      getProducts
      .then(p=> {
        setproducts(p)
      })
      .catch((err)=> console.log(err))
    }
  },[idCategoria])


  const onAdd = ()=>{
    console.log("producto agregado")
  }

  return (
    <main>
        <h1>{greeting}</h1>
        <ItemList products={products} />
    </main>
  )
}
