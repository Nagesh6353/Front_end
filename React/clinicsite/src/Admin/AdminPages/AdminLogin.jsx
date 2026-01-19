import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function AdminLogin() {

    const redirect = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem("Aid")){
            redirect("/dashboard")
        }
    },[])

    const [form,setform] = useState({
        email:"",
        password:""
    });

    const getchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const getlogin = async (e) => {
        e.preventDefault();

        try {
            const {email, password} = form;

            if(email == "" || password == ""){
                toast.error("Pls Field The Data..");
                return false;
            }

            const res = await axios.get(`http://localhost:3000/admin?email=${email}`);
            console.log(res.data);

            if(res.data.length === 0){
                toast.error("Email does not match..")
                return false;
            }

            const admin = res.data[0];

            if(admin.password != password){
                toast.error("Password does not match..");
                return false;
            }

            toast.success("login successfully..");

            localStorage.setItem("Aid", admin.id);
            localStorage.setItem("Aname", admin.name);

            redirect("/dashboard");


        } catch (error) {
            console.log("Api Not Found",error);
            toast.error("Api Not Found..");
        }
    }



    return (
        <div>
            <div className="container">
                <h1 className="text-center mb-4">Admin Login</h1>
                <div className="col-4 mx-auto">
                    <form onSubmit={getlogin}>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" value={form.email} onChange={getchange} name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" onChange={getchange} value={form.password} name='password' className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>

                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin