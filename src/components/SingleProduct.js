import React from 'react'
import { Link } from 'react-router-dom'

const SingleProduct = ({ item }) => {
    return (
        <div className="card shadow" style={{ "width": "17rem", "border": "1px solid white", "borderRadius": "10px" }}>
            <Link to={`product/${item.id}`}>
                <img src={item.image} className="card-img-top" alt={item.title} style={{ "height": "250px", "objectFit": "cover" }} />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                    {item.description.slice(0, 100)}
                    <Link to={`product/${item.id}`}>
                        ....more
                    </Link>
                </p>
                <div className='d-flex justify-content-between'>
                    <h6>Price : <del className=''>{item.market_price} Tk</del></h6>
                    <h6 className='text-danger fw-bold'>{item.selling_price} Tk</h6>
                </div>
                <div className='text-center my-2'>
                    <Link to="#" className='btn btn-success'>Add To Cart</Link>
                </div>


            </div>
        </div>
    )
}

export default SingleProduct