import React, { useState } from 'react'
import Adminheader from '../AdminComan/Adminheader'
import AdminPageTitle from '../AdminComan/AdminPageTitle'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function AddDoctor() {

    const redirect = useNavigate();

    const [form, setform] = useState({
        id: "",
        name: "",
        specialist: "",
        desc: "",
        experience: "",
        department: "",
        image: ""
    })

    const inputchange = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(), //new id created
            [e.target.name]: e.target.value
        })
        console.log(form);
    }

    const getsubmit = async (e) => {

        e.preventDefault()

        if (form.name == "" || form.specialist == "" || form.desc == "" || form.experience == "" || form.department == "" || form.image == "") {
            console.log("Pls Field the Data...");
            return false;
        }

        try {
            const res = await axios.post("http://localhost:3000/doctors", form);
            console.log(res.data);
            setform({
                id: "",
                name: "",
                specialist: "",
                desc: "",
                experience: "",
                department: "",
                image: "",
            })

            redirect("/doctormanage");

        } catch (error) {
            console.log("Api Not Found..", error);
        }
    }

    return (
        <div>

            <Adminheader />
            <AdminPageTitle name="Add Doctor" title="Add Doctor" />
            <div className="container">
                <form method='post' onSubmit={getsubmit} className='my-5'>
                    <div className="mb-3">
                        <input type="text" onChange={inputchange} value={form.name} name='name' className="form-control" placeholder='Doctor Name' />
                    </div>
                    <div className="mb-3">
                        <select onChange={inputchange} name="specialist" value={form.specialist} className="form-select" required>
                            <option value hidden>Select Specialist</option>
                            <option value="general">General Consultation</option>
                            <option value="cardiology">Cardiologist</option>
                            <option value="neurology">Neurologist</option>
                            <option value="orthopedics">Orthopedic Surgeon</option>
                            <option value="pediatrics">Pediatrician</option>
                            <option value="dermatology">Dermatologist</option>
                            <option value="oncology">Oncologist</option>
                            <option value="oncology">Emergency Medicine</option>
                            <option value="oncology">Radiologist</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <input type="text" onChange={inputchange} value={form.desc} name='desc' className="form-control" placeholder='Description' />
                    </div>
                    <div className="mb-3">
                        <input type="text" onChange={inputchange} value={form.experience} name='experience' className="form-control" placeholder='Experience' />
                    </div>
                    <div className="mb-3">
                        <select onChange={inputchange} name="department" value={form.department} className="form-select" required>
                            <option value hidden>Select Department</option>
                            <option value="general">General Consultation Dept.</option>
                            <option value="cardiology">Cardiology Dept.</option>
                            <option value="neurology">Neurology Dept.</option>
                            <option value="orthopedics">Orthopedics Dept.</option>
                            <option value="pediatrics">Pediatrics Dept.</option>
                            <option value="dermatology">Dermatology Dept.</option>
                            <option value="oncology">Oncology Dept.</option>
                            <option value="oncology">Emergency Medicine Dept.</option>
                            <option value="oncology">Radiology Dept.</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <input type="url" onChange={inputchange} value={form.image} name='image' className="form-control" placeholder='Image url' />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default AddDoctor