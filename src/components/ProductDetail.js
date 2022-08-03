import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { domain } from '../env'
import axios from 'axios'
import { useEffect } from 'react'

const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])

    const getProductDetail = (id) => {
        axios.get(`${domain}/product/${id}/`)
            .then((response) => {
                const product = response.data
                setProduct(product)
            })
            .catch(error => console.error(`Error : ${error}`))
    }
    useEffect(() => {
        getProductDetail(id)
    }, [])
    return (
        <div className="my-3">
            <h1 className="text-center text-danger fw-bold">Product Detail</h1>
            <div className="container my-3">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 my-2">
                        <img src={product.image} alt="" height="300px" width="300px"/>
                        <div className="container d-flex my-5">
                            <div className=''>
                            <img src={product.image} alt="" height="70px" width="80px"/>
                            </div>
                            <div className='mx-2'>
                            <img src={product.image} alt="" height="70px" width="80px"/>
                            </div>
                            <div className='ms-2'>
                            <img src={product.image} alt="" height="70px" width="80px"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 my-2">
                        <h3 className='my-2 text-success text-uppercase'>Product Name :  {product.title}</h3>
                        <h3 className='my-2 text-success text-uppercase'>Market Price :  {product.market_price}</h3>
                        <h3 className='my-2 text-success text-uppercase'>Selling Price :  {product.selling_price}</h3>

                        <h3 className='my-2 text-success text-uppercase'>Description :</h3>
                        <p>{product.description}</p>

                        <div className='text-center'>
                            <button className='btn btn-outline-warning w-50'>Add to Cart</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail