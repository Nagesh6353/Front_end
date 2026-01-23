import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import Header from '../Coman/Header';
import Footer from '../Coman/Footer';

function UpdateProfile() {

    const redirect = useNavigate();

    const [form, setform] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    })

    useEffect(() => {
        fetchuser()
    }, [])

    const fetchuser = async () => {
        const res = await axios.get(`http://localhost:3000/users/${localStorage.getItem('Uid')}`)
        setform(res.data)
    }

    const getchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const getupdate = async (e) => {
        e.preventDefault();


        try {
            const res = await axios.put(`http://localhost:3000/users/${form.id}`, form)
            console.log(res.data)

            localStorage.setItem('Uname', res.data.name)
            toast.success("Update Successfully..")
            redirect("/")
            setform({
                name: "",
                email: "",
                password: ""
            })
        } catch (error) {
            toast.error("Api not Found...")
        }
    }



    return (
        
        <div>
            <Header />
            
            <div className="container">
                <h1 className="text-info text-center mt-5">Update Profile</h1>
                <div className="col-4 mx-auto">
                    <form onSubmit={getupdate} className='my-5'>

                        <div className="mb-3">
                            <input type="text" name="name" value={form.name} onChange={getchange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <input type="email" name="email" value={form.email} onChange={getchange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <input type="password" name="password" value={form.password} onChange={getchange} className="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default UpdateProfile