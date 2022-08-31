import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { domain } from '../env'
import axios from 'axios'
import { useEffect } from 'react'
import SingleProduct from './SingleProduct'

const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [recomProduct, setRecomProduct] = useState(null)

    const getProductDetail = (id) => {
        axios.get(`${domain}/product/${id}/`)
            .then((response) => {
                const product = response.data
                setProduct(product)
                categoryProduct(product?.category)
            })
            .catch(error => console.error(`Error : ${error}`))
    }
    useEffect(() => {
        getProductDetail(id)
    },[])

    const categoryProduct = (id) => {
        axios.get(`${domain}/category/${id}/`)
            .then((response) => {
                const categoryProduct = response.data
                setRecomProduct(categoryProduct)
            })
            .catch(error => console.error(`Error : ${error}`))
    }
    return (
        <div className="my-3">
            <h1 className="text-center text-danger fw-bold">Product Detail</h1>
            <div className="container my-3">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 my-2">
                        <img src={product.image} alt="" height="300px" width="300px" />
                        <div className="container d-flex my-5">
                            <div className=''>
                                <img src={product.image} alt="" height="70px" width="80px" />
                            </div>
                            <div className='mx-2'>
                                <img src={product.image} alt="" height="70px" width="80px" />
                            </div>
                            <div className='ms-2'>
                                <img src={product.image} alt="" height="70px" width="80px" />
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
            <div className="container">
                <h1 className='text-danger fw-bold'>Recommended Product</h1>
                <div className="row">
                    {recomProduct?.map((item, i) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3" key={i}>
                            <SingleProduct item={item} />
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductDetail