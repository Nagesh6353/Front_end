import React, { useEffect, useState } from 'react'
import Adminheader from '../AdminComan/Adminheader'
import AdminPageTitle from '../AdminComan/AdminPageTitle'
import axios from 'axios'

function DoctorManage() {

    const [doctor, setdoctor] = useState([]);

    useEffect(() => {
        fetchdoctors();
    },[])

    const fetchdoctors = async () => {
        const res = await axios.get("http://localhost:3000/doctors");
        setdoctor(res.data);
    }

    return (
        <div>
            <Adminheader />
            <AdminPageTitle name="Doctor Manage" title="Doctor Manage" />

            <div className="container">
                <table className="table table-striped mt-5">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">Name</th>
                            <th scope="col">specialist</th>
                            <th scope="col">experience</th>
                            <th scope="col">department</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctor && doctor.map((data, index) => {
                                return (
                                    <tr className='text-center'>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.specialist}</td>
                                        <td>{data.experience}</td>
                                        <td>{data.department}</td>
                                        <td><img src={data.image} width="100px" alt="" /></td>
                                        <td>
                                            <button className='btn btn-info mx-2'>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
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

export default DoctorManage