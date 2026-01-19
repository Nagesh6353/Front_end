import React, { useEffect, useState } from 'react'
import Adminheader from '../AdminComan/Adminheader'
import AdminPageTitle from '../AdminComan/AdminPageTitle'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function DoctorManage() {

    const redirect = useNavigate();

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

    // Delete Record
    const deleteDoctor = async (id) => {
        const res = await axios.delete(`http://localhost:3000/doctors/${id}`);
        alert("Are You Sure To Delete");
        fetchdoctors();
    }

    // Edit Record

    const [edit, setedit] = useState(null);

    const [edited, setedited] = useState({
        id: "",
        name: "",
        specialist: "",
        desc: "",
        experience: "",
        department: "",
        image: ""
    });

    const openmodal = (data) => {
        console.log(data);
        setedit(data);
        setedited(data);
    }

    const getchange = (e) => {
        setedited({
            ...edited,
            [e.target.name]: e.target.value,
        });
    };

    const update = async (e) => {

        e.preventDefault()

        try {
            const res = await axios.put(`http://localhost:3000/doctors/${edited.id}`, edited);
            toast.success("Record Update Successfully..");
            setedited({
                id: "",
                name: "",
                specialist: "",
                desc: "",
                experience: "",
                department: "",
                image: ""
            });

            setedit(null);
            redirect("/doctormanage");
            
        } catch (error) {
            toast.error("Api Not Found..");
        }
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
                                            <button className='btn btn-success mx-2' onClick={() => openmodal(data)} >Edit</button>
                                            <button className='btn btn-danger' onClick={() => deleteDoctor(data.id)}>Delete</button>
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

                {/* update form Modal */}
                {edit && (
                    <div className="container my-5">
                        <h1>Update Form</h1>
                        <form method="post" className="php-email-form">
                            <div className="row gy-4">
                                <div className="col-12">
                                    <input type="text" onChange={getchange} value={edited.name} name="name" className="form-control" placeholder="Doctors name" required />
                                </div>
                                <div className="mb-3">
                                    <select name="specialist" onChange={getchange} value={edited.specialist} className="form-select" required>
                                        <option value hidden>Select Specialist</option>
                                        <option value="general">General Consultation</option>
                                        <option value="cardiology">Cardiologist</option>
                                        <option value="neurology">Neurologist</option>
                                        <option value="orthopedics">Orthopedic Surgeon</option>
                                        <option value="pediatrics">Pediatrician</option>
                                        <option value="dermatology">Dermatologist</option>
                                        <option value="oncology">Oncologist</option>
                                        <option value="Emergency">Emergency Medicine</option>
                                        <option value="Radiology">Radiologist</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <input type="url" name="image" onChange={getchange} value={edited.image} className="form-control" placeholder="Full image" required />
                                </div>

                                <div className="col-12">
                                    <textarea name="desc" onChange={getchange} value={edited.desc} className="form-control" rows={4} placeholder="descrition" />
                                </div>

                                <div className="col-12">
                                    <input type="text" onChange={getchange} value={edited.experience} name="experience" className="form-control" placeholder='experience' required />
                                </div>

                                <div className="mb-3">
                                    <select name="department" onChange={getchange} value={edited.department} className="form-select" required>
                                        <option value hidden>Select Department</option>
                                        <option value="general dept.">General Consultation Dept.</option>
                                        <option value="cardiology dept.">Cardiology Dept.</option>
                                        <option value="neurology dept.">Neurology Dept.</option>
                                        <option value="orthopedics dept.">Orthopedics Dept.</option>
                                        <option value="pediatrics dept.">Pediatrics Dept.</option>
                                        <option value="dermatology dept.">Dermatology Dept.</option>
                                        <option value="oncology dept.">Oncology Dept.</option>
                                        <option value="Emergency dept.">Emergency Medicine Dept.</option>
                                        <option value="Radiology dept.">Radiology Dept.</option>
                                    </select>
                                </div>

                                <div className="col-12">
                                    <button type="submit" className="btn btn-success" onClick={update}>Update</button>
                                    <button type="submit" className="btn btn-info mx-1" onClick={() => setedit(null)} > cancle</button>
                                </div>
                            </div>
                        </form>
                    </div>
                )}
            </div>

        </div>
    )
}

export default DoctorManage