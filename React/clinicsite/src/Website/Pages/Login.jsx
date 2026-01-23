import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
    const redirect = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem("Uid")){
            redirect("/");
        }
    })

    const [form, setform] = useState({
        email: "",
        password: ""
    });

    const getchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const getsubmit = async (e) => {
        e.preventDefault();

        try {
            const { email, password } = form;

            if (email == "" || password == "") {
                toast.error("Pls Field The Data..");
                return false;
            }
            const res = await axios.get(`http://localhost:3000/users?email=${email}`);
            console.log(res.data);

            if (res.data.length === 0) {
                toast.error("Email does not match..");
                return false;
            }

            const user = res.data[0];

            if (user.password != password) {
                toast.error("Password does not match..");
                return false;
            }

            if(user.status === "block"){
                toast.error("your account has been block..");
                return false;
            }

            toast.success("Login Successfully..");
            localStorage.setItem("Uid",user.id);
            localStorage.setItem("Uname",user.name);
            redirect("/");
            

        } catch (error) {
            console.log("Api Not Found..", error);
            toast.error("Api Not Found..");
        }
    }

    return (
        <div>
            <div className="container">
                <div className="col-4 mx-auto">
                    <h1 className="text-center mb-4">User Login Page</h1>
                    <form onSubmit={getsubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" onChange={getchange} name='email' value={form.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" onChange={getchange} name='password' value={form.password} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login