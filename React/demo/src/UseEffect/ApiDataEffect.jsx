import React, { useEffect, useState } from 'react'

function ApiDataEffect() {
    const [user, setuser] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = () => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET"
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                // console.log(data)
                setuser(data)
            })
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">City</th>
                        <th scope="col">Company</th>
                        <th scope="col">Zip Code</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.address.city}</td>
                                    <td>{data.company.name}</td>
                                    <td>{data.address.zipcode}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default ApiDataEffect