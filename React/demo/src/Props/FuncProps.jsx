import React from 'react'

function FuncProps({ img, desc, title }) {
    return (
        
            <div className="col-md-4 my-5">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <button className="btn btn-success">Buy Now</button>
                    </div>
                </div>
            </div>
        
    )
}

export default FuncProps