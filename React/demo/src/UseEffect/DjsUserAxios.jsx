import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DjsUserAxios() {

    const [userdata, setuserdata] = useState([])

    useEffect(() => {
        fetchuser()
    }, [])

    const fetchuser = async () => {
        const res = await axios.get("https://dummyjson.com/users")
        // console.log(res.data.users)
        setuserdata(res.data.users)
    }

    return (
        <div>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Email</th>
                            <th scope="col">Image</th>
                            <th scope="col">City</th>
                            <th scope="col">State</th>
                            <th scope="col">Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userdata && userdata.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.username}</td>
                                        <td>{data.age}</td>
                                        <td>{data.gender}</td>
                                        <td>{data.email}</td>
                                        <td><img src={data.image} width="50px" alt="" /></td>
                                        <td>{data.address.city}</td>
                                        <td>{data.address.state}</td>
                                        <td>{data.address.country}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default DjsUserAxios