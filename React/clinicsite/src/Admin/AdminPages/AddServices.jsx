import React, { useState } from 'react'
import Adminheader from '../AdminComan/Adminheader'
import { toast } from 'react-toastify'
import axios from 'axios'
import AdminPageTitle from '../AdminComan/AdminPageTitle'
import { useNavigate } from 'react-router-dom'

function AddServices() {

    const redirect = useNavigate();

    const [form, setform] = useState({
        id: "",
        name: "",
        desc: "",
        image: ""
    })

    const getChange = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const getSubmit = async (e) => {
        e.preventDefault();

        if (form.name == "" || form.image == "" || form.desc == "") {
            toast.error("Pls Fields Details..");
            return false;
        }

        try {
            const res = await axios.post("http://localhost:3000/services", form);
            toast.success("Service Added Successfully..");

            setform({
                id: "",
                name: "",
                desc: "",
                image: ""
            })

            redirect("/servicemanage");

        } catch (error) {
            toast.error("Api Not Found..");
        }
    }

    return (
        <div>
            <Adminheader />
            <AdminPageTitle name="Add Service" title="Add Service" />

            <div className="container my-5">
                <form method="post" onSubmit={getSubmit} className="php-email-form">
                    <div className="row gy-4">
                        <div className="col-12">
                            <select name="name" onChange={getChange} value={form.name} className="form-select" required>
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
                            <input type="url" onChange={getChange} value={form.image} name="image" className="form-control" placeholder="Full image" required />
                        </div>

                        <div className="col-12">
                            <textarea name="desc" onChange={getChange} value={form.desc} className="form-control" rows={4} placeholder="descrition" defaultValue={""} />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-success">Service add</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default AddServices