import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Adminheader() {

    const redirect = useNavigate();

    useEffect(()=>{
        if(!localStorage.getItem("Aid")){
            redirect("/adminlogin");
        }
    })

    const logout = () =>{
        localStorage.removeItem("Aid");
        localStorage.removeItem("Aname");
        redirect("/adminlogin");
        toast.success("Logout Successfully..");
    }

    return (
        <div>
            <header id="header" className="header fixed-top">

                <div className="branding d-flex align-items-cente">
                    <div className="container position-relative d-flex align-items-center justify-content-between">
                        <a href="index.html" className="logo d-flex align-items-center">
                            {/* Uncomment the line below if you also wish to use an image logo */}
                            {/* <img src="assets/img/logo.webp" alt=""> */}
                            <h1 className="sitename">Clinic</h1>
                        </a>
                        <nav id="navmenu" className="navmenu">
                            <ul>
                                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                                <li className="dropdown"><span>Doctors</span> <i className="bi bi-chevron-down toggle-dropdown" />
                                    <ul>
                                        <li><NavLink to="/doctormanage">Doctor Manage</NavLink></li>
                                        <li><NavLink to="/adddoctor">Add Doctor</NavLink></li>
                                    </ul>
                                </li>
                                <li>
                                    {
                                        (() => {
                                            if (localStorage.getItem("Aid")) {
                                                return (
                                                    <Link>Hello,{localStorage.getItem("Aname")}</Link>
                                                )
                                            }
                                        })()
                                    }
                                </li>
                                <li>
                                    {
                                        (()=>{
                                            if(localStorage.getItem("Aid")){
                                                return(
                                                    <Link onClick={logout}>Logout</Link>
                                                )
                                            }
                                            else{
                                                return(
                                                    <Link to="/adminlogin">Login</Link>
                                                )
                                            }
                                        })()
                                    }
                                </li>
                                {/* <li><NavLink to="/department">Departments</NavLink></li>
                                <li><NavLink to="/services">Services</NavLink></li>
                                <li><NavLink to="/doctor">Doctors</NavLink></li>
                                                               
                                <li><NavLink to="/contact">Contact</NavLink></li> */}
                            </ul>
                            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Adminheader