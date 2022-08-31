import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { domain } from '../env'
import axios from 'axios'
import { useEffect } from 'react'
import SingleProduct from './SingleProduct'

const CategoryProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])

    const getCategoryProduct = (id) => {
        axios.get(`${domain}/category/${id}/`)
            .then((response) => {
                const product = response.data
                console.log("catProduct",product)
                setProduct(product)
            })
            .catch(error => console.error(`Error : ${error}`))
    }
    useEffect(() => {
        getCategoryProduct(id)
    },[])

  return (
    <div className='container'>
        <h1 className='text-center text-danger fw-bold my-2'>Category Product</h1>
        <div className='row'>
                    {product?.map((item, i) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3" key={i}>
                            <SingleProduct item={item} />
                        </div>
                    ))}
                </div>
    </div>
  )
}

export default CategoryProduct