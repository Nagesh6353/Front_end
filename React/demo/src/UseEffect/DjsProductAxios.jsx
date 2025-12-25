import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DjsProductAxios() {

    const [products, setproducts] = useState([])

    useEffect(() => {
        fetchproduct()
    }, [])

    const fetchproduct = async () => {
        const res = await axios.get("https://dummyjson.com/products")
        // console.log(res.data)
        setproducts(res.data.products)
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        products && products.map((data, index) => {
                            // console.log(data);
                            return (
                                <div className="col-md-3 mb-4" key={index}>
                                    <div className="card h-100" style={{ width: '18rem' }}>
                                        <img src={data.images} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{data.title}</h5>
                                            <h5 className="card-text">{data.price}$</h5>
                                            <h5 className="card-text">{data.category}</h5>
                                            <p className="card-text">{data.description.slice(0, 60)}...</p>
                                            <h5 className="card-text">Rating: {data.rating}/5</h5>
                                            <h5 className="card-text">Brand: {data.brand}</h5>
                                            <button className='btn btn-success'>Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default DjsProductAxios