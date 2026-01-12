import React, { useEffect, useState } from 'react'
import Adminheader from '../AdminComan/Adminheader'
import AdminPageTitle from '../AdminComan/AdminPageTitle'
import axios from 'axios'

function DoctorManage() {

    // All Doctors API
    const [doctor, setdoctor] = useState([]);

    useEffect(() => {
        fetchdoctors();
    }, [])

    const fetchdoctors = async () => {
        const res = await axios.get("http://localhost:3000/doctors");
        setdoctor(res.data);
    }

    // Single Doctor API Call Using View

    const [singledoctor, setsingledoctor] = useState({

        id: "",
        name: "",
        specialist: "",
        desc: "",
        experience: "",
        department: "",
        image: ""
    });

    const viewDoctor = async (id) => {
        const res = await axios.get(`http://localhost:3000/doctors/${id}`);
        // console.log(res.data);
        setsingledoctor(res.data);
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
                                    <tr className='text-center' key={index}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.specialist}</td>
                                        <td>{data.experience}</td>
                                        <td>{data.department}</td>
                                        <td><img src={data.image} width="100px" alt="" /></td>
                                        <td>
                                            <button className='btn btn-info mx-2' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => viewDoctor(data.id)}>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

                {/* View Modal */}
                <div className="modal col-12" id="exampleModal" tabIndex={-1}  >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Doctor Id: {singledoctor.id}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <p>Doctor Name: {singledoctor.name}</p>
                                <img src={singledoctor.image} />
                                <p>Specialist: {singledoctor.specialist}</p>
                                <p>Description: {singledoctor.desc}</p>
                                <p>Experience: {singledoctor.experience}</p>
                                <p>Department: {singledoctor.department}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default DoctorManage