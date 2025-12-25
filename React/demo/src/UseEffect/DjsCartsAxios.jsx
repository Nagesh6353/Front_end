import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DjsCartsAxios() {

    const [cart, setcart] = useState([])

    useEffect(() => {
        fetchcarts()
    }, [])

    const fetchcarts = async () => {
        const res = await axios.get("https://dummyjson.com/carts")
        setcart(res.data.carts)
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        cart && cart.map((data, index) => 
                            data.products.map((product, index) => {
                                return (
                                    <div className="col-md-3">
                                        <div className="card" style={{ width: '18rem' }}>
                                        <img src={product.thumbnail} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.price}</p>
                                            
                                        </div>
                                    </div>
                                    </div>

                                )
                            })
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default DjsCartsAxios