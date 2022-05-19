import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import "./itemdetailcontainer.css"

const products =  [

  {
    name: "Teclado redragon",
    categoria: "teclados",
    id:1,
    img: "https://http2.mlstatic.com/D_NQ_NP_654842-MLA32722683116_102019-O.webp",
    precio:6000,
    descripcion: "teclado redragon edicion limitada"
  },
  {
    name: "Auriculares redragon",
    categoria: "auriculares",
    id:2,
    img: "https://http2.mlstatic.com/D_NQ_NP_700257-MLA44366065265_122020-O.webp",
    precio:9000,
    descripcion: "auriculares redragon edicion limitada"
  },
]

const getProduct = new Promise((res,rej)=>{
    setTimeout(() => {
      res(products)
    }, 3000);
  })


export const ItemDetailContainer = () => {


    const [product, setProduct] = useState({})
    const {idItem} = useParams()
    useEffect(()=>{
        getProduct
        .then(res=>{
            setProduct(res.find(p => p.id == idItem))
        })
        .catch((err)=> console.log(err))
    })


  return (
    <div>
        <ItemDetail product={product} />
    </div>
  )
}
