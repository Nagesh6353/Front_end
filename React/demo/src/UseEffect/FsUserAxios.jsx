import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FsUserAxios() {
    const [user, setuser] = useState([])

    const fetchdata = async () => {
        const res = await axios.get("https://fakestoreapi.com/Users")
        // console.log(res.data)
        setuser(res.data)
    }

    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <div>
            {
                // console.log(user)
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#ID</th>
                                <th scope="col">Name</th>
                                 <th scope="col">User Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">City</th>
                                <th scope="col">Zip Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user && user.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{data.id}</th>
                                            <td>{data.name.firstname}</td>
                                            <td>{data.username}</td>
                                            <td>{data.email}</td>
                                            <td>{data.address.city}</td>
                                            <td>{data.address.zipcode}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default FsUserAxios