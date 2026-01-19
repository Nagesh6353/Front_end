import React from 'react'

function UserCard({ name, age, location }) {
    return (
        <div>
            <div className="container">
                <h1 className="text-center mb-4 text-info">Props Component</h1>
                <div className="card mx-auto" style={{ width: '18rem', alignItems: "center", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.12)", border: "none" }}>
                    <div className="card-body">
                        <h5 className="card-title">Name: {name}</h5>
                        <h5>Age: {age}</h5>
                        <h5>Location: {location}</h5>
                    </div>
                </div>
            </div>
            <hr className="my-5" />
        </div>
    )
}

export default UserCard