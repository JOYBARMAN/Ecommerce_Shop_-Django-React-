import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { domain } from '../env'
import axios from 'axios'
import { useEffect } from 'react'

const ProductDetail = () => {
    const {id}=useParams()
    const [product,setProduct]=useState([])

    const getProductDetail = (id) => {
        axios.get(`${domain}/product/${id}/`)
            .then((response) => {
                const product = response.data
                setProduct(product)
                // console.log("product",product)
            })
            .catch(error => console.error(`Error : ${error}`))
    }
    useEffect(() => {
        getProductDetail(id)
    }, [])
  return (
    <div>
        <h1>This Is a Product Detail Page For</h1>
        <h1>{product.title}</h1>
        <img src={product.image} alt="" height="250px" width="250px" />
    </div>
  )
}

export default ProductDetail