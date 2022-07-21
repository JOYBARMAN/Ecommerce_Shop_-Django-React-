import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { domain } from '../env'
import NavBar from './NavBar'
import SingleProduct from './SingleProduct'
const HomePage = () => {
    const [products, setProducts] = useState([])
    const getProducts = () => {
        axios.get(`${domain}/product/`)
            .then((response) => {
                const allProducts = response.data.results
                setProducts(allProducts)
            })
            .catch(error => console.error(`Error : ${error}`))
    }
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <>
            <NavBar />
            <div className='container-fluid'>
                <h2 className='text-danger fw-bold my-3'>All Products</h2>
                <div className='row'>
                    {products.map((item, i) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3" key={i}>
                            <SingleProduct item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default HomePage