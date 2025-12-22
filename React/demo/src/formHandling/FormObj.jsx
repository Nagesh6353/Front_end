import React, { useState } from 'react'

function FormObj() {
    const [form,setform] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    })

    const getChange =(e)=>{
        setform({
            ...form,
            [e.target.name] : e.target.value
        })
        console.log(form)
    }
    return (
        <div>
            <h1 className='text-center'>Form Object Data</h1>
            {/* <div className="container">
                <div className="col-4 mx-auto">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label">Enter Your Name</label>
                            <input type="text" value={form.name} onChange={(e)=>setform({...form,name:e.target.value})} className="form-control" id="exampleInputName" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" value={form.email} onChange={(e)=>setform({...form,email:e.target.value})} className="form-control" id="exampleInputEmail1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputphone" className="form-label">Enter Your Phone</label>
                            <input type="tel" value={form.phone} onChange={(e)=>setform({...form,phone:e.target.value})} className="form-control" id="exampleInputphone" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" value={form.password} onChange={(e)=>setform({...form,password:e.target.value})} className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div> */}

            <div className="container">
                <div className="col-4 mx-auto">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label">Enter Your Name</label>
                            <input type="text" value={form.name} name='name' onChange={getChange} className="form-control" id="exampleInputName" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" value={form.email} name='email' onChange={getChange} className="form-control" id="exampleInputEmail1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputphone" className="form-label">Enter Your Phone</label>
                            <input type="tel" value={form.phone} name='phone' onChange={getChange} className="form-control" id="exampleInputphone" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" value={form.password} onChange={getChange} name='password' className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormObj