import React, { useEffect, useState } from 'react'
import Adminheader from '../AdminComan/Adminheader'
import AdminPageTitle from '../AdminComan/AdminPageTitle'
import axios from 'axios';
import { toast } from 'react-toastify';

function ServiceManage() {

    const [service, setservice] = useState([]);

    useEffect(() => {
        fetchservice();
    }, [])

    const fetchservice = async () => {
        const res = await axios.get("http://localhost:3000/services");
        setservice(res.data);
    }

    // Single Service Fetch or View
    const [singleservice, setsingleservice] = useState({
        id: "",
        name: "",
        desc: "",
        image: ""
    })

    const fetchSingleService = async (id) => {
        const res = await axios.get(`http://localhost:3000/services/${id}`);
        setsingleservice(res.data);
    }

    // Service Delete
    const deleteService = async (id) => {
        const res = await axios.delete(`http://localhost:3000/services/${id}`);
        toast.success("Service Deleted Successfully..");
        fetchservice();
    }

    // Service Edit 
    const [edit, setedit] = useState(null);
    const [edited, setedited] = useState({
        id: "",
        name: "",
        desc: "",
        image: ""
    })

    const openmodal = (data) => {
        setedit(data);
        setedited(data);
    }

    const getchange = (e) => {
        setedited({
            ...edited,
            [e.target.name]: e.target.value
        })
    }

    // Update Service

    const getUpdate = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.put(`http://localhost:3000/services/${edited.id}`, edited);
            toast.success("Service Updated Successfully..");

            setedited({
                id: "",
                name: "",
                desc: "",
                image: ""
            })

            setedit(null);
            fetchservice();

        } catch (error) {
            toast.error("Api Not Found..");
        }
    }


    return (
        <div>
            <Adminheader />
            <AdminPageTitle name="Service Manage" title="Service Manage" />

            <div className="container">
                <table className="table table-striped mt-5 ">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            service && service.map((data, index) => {
                                return (
                                    <tr className='text-center' key={index} >
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td><img src={data.image} width="100px" alt="" /></td>
                                        <td>
                                            <button className="btn btn-info mx-2" onClick={() => fetchSingleService(data.id)} data-bs-toggle="modal" data-bs-target="#exampleModal" >View</button>
                                            <button className="btn btn-success mx-2" onClick={() => openmodal(data)}>Edit</button>
                                            <button className="btn btn-danger" onClick={() => deleteService(data.id)} >Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>


                {/* View Services Modal */}
                <div className="modal col-12" id="exampleModal" tabIndex={-1}>
                    <div className="modal-dialog">
                        <div className="modal-content p-5">
                            <div className="modal-header">
                                <h5 className="modal-title">Service Id: {singleservice.id}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <p>Service Name: {singleservice.name}</p>
                                <img src={singleservice.image} width="200px" />
                                <p className='mt-4'>Description: {singleservice.desc}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* update form Modal */}
                {
                    edit && (
                        <div className="container my-5">
                            <h1>Update Form</h1>
                            <form method="post" className="php-email-form">
                                <div className="row gy-4">
                                    <div className="col-12">
                                        <select value={edited.name} onChange={getchange} name="name" className="form-select" required>
                                            <option value hidden>Select Service</option>
                                            <option value="general">General Consultation</option>
                                            <option value="cardiology">Cardiology</option>
                                            <option value="neurology">Neurology</option>
                                            <option value="orthopedics">Orthopedics</option>
                                            <option value="pediatrics">Pediatrics</option>
                                            <option value="dermatology">Dermatology</option>
                                            <option value="oncology">Oncology</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <input type="url" value={edited.image} onChange={getchange} name="image" className="form-control" placeholder="Full image" required />
                                    </div>

                                    <div className="col-12">
                                        <textarea name="desc" onChange={getchange} value={edited.desc} className="form-control" rows={4} placeholder="descrition" defaultValue={""} />
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-success" onClick={getUpdate}>Update</button>
                                        <button type="submit" className="btn btn-info mx-1" onClick={() => setedit(null)}> cancle</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )
                }

            </div>

        </div>
    )
}

export default ServiceManage