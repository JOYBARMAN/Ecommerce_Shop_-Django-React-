import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { domain } from '../env'
import SingleProduct from './SingleProduct'
const HomePage = () => {
    const [products, setProducts] = useState([])
    const [data, setData] = useState([])
    const [category, setCategory] = useState([])
    
    const getProducts = () => {
        axios.get(`${domain}/product/`)
            .then((response) => {
                const data = response.data
                const allProducts = response.data.results
                setData(data)
                setProducts(allProducts)
                // getCategory()
            })
            .catch(error => console.error(`Error : ${error}`))
    }

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        getCategory()
    }, [])

    const getCategory = () => {
        axios.get(`${domain}/category/`)
        .then((response)=>{
            const data = response.data
            setCategory(data)
        })
        .catch(error => console.error(`Error : ${error}`))
    }

    const nextProduct = () => {
        axios.get(data?.next)
            .then((response) => {
                const data = response.data
                setData(data)
                setProducts(data.results)
            })
            .catch(error => console.error(`Error : ${error}`))

    }

    const previousProduct = () => {
        axios.get(data?.previous)
            .then((response) => {
                const data = response.data
                setData(data)
                setProducts(data.results)
            })
            .catch(error => console.error(`Error : ${error}`))
    }

    return (
        <>
            <div className='container-fluid'>
                <h2 className='text-danger fw-bold my-3'>All Products</h2>
                <div className="d-flex my-2 justify-content-center">
                    {category?.map((item,i)=>(
                        <div className='mx-3' key={i}>
                            <Link to={`category/${item.id}`} className='btn btn-secondary'>{item.title}</Link>
                        </div>
                    ))}
                </div>
                
                <div className='row'>
                    {products?.map((item, i) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3" key={i}>
                            <SingleProduct item={item} />
                        </div>
                    ))}
                </div>
                <div className="row justify-content-center mt-3">
                    <div className="col-lg-4 d-flex justify-content-between">
                        <div>
                            {data?.previous !== null ? (
                                <button className='btn btn-danger' onClick={previousProduct} >previous</button>
                            ) : (
                                <button className='btn btn-danger' disabled>previous</button>
                            )}

                        </div>

                        <div>
                            {data?.next !== null ? (
                                <button className='btn btn-success' onClick={nextProduct}>next</button>
                            ) : (
                                <button className='btn btn-success' disabled>next</button>
                            )}

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage