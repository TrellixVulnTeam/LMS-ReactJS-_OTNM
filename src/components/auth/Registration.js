import React, {useState } from "react";
import {Link} from "react-router-dom";
import { FaUser     } from "react-icons/fa";
import {FaStar} from "react-icons/fa";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () =>{
    const history = useHistory();
    const [members, setMember] = useState({
        mem_fname:"",
        mem_lname:"",
        mem_email:"",
        mem_password:"",
        mem_year:"",
        mem_faculty:"",
        mem_phone:"",
        mem_addrss:"",
        mem_dob:"",
        mem_age:"",
        mem_gender:""
    });

    const { mem_fname, mem_lname, mem_email, mem_password, mem_year, mem_faculty, mem_phone, mem_address, mem_dob, mem_age, mem_gender} = members;
    const onInputChange = (e) => {
        setMember({ ...members, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3001/members", members);
        // history.push("/auth/after-auth-admin/admin-dashboard/member");
    };
    const callToast = () =>{
        toast("SignUp Sucessfully!!");
    }
    return(
        <>
            <section className="auth-section" style={{height:"46rem"}}>
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="my-login-container" style={{marginTop : "23rem"}}>
                            <div className="featued-icon">
                                <i><FaUser/></i>
                            </div>
                            <form onSubmit={onSubmit} autoComplete="off">
                            <div className="container add-book-form">
                            <div className="function-indicator">
                                <h3>SignUp</h3>
                            </div>
                                <div className="row">
                                    <div className="col-md-4">
                                    <div className="form-group">
                                        <label>First Name <i><FaStar/></i></label>
                                        <input  
                                        placeholder="Enter First Name" 
                                        type="text" className="form-control"
                                        required 
                                        name="mem_fname"  
                                        value={mem_fname}
                                        onChange={onInputChange}
                                        />
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Last Name<i><FaStar/></i></label>
                                        <input 
                                        placeholder="Enter Last Name" 
                                        type="text" 
                                        className="form-control" 
                                        required  
                                        name="mem_lname"  
                                        value={mem_lname}
                                        onChange={onInputChange}
                                        />
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Email <i><FaStar/></i></label>
                                        <input 
                                        placeholder="Enter Email"
                                        type="text" 
                                        className="form-control"
                                        required   
                                        name="mem_email"  
                                        value={mem_email}
                                        onChange={onInputChange}
                                        />
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Password <i><FaStar/></i></label>
                                        <input 
                                        placeholder="Password" 
                                        type="password" 
                                        className="form-control"
                                        required  
                                        name="mem_password"  
                                        value={mem_password}
                                        onChange={onInputChange}
                                        />
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="form-group">
                                    <label>Year <i><FaStar/></i></label>
                                        <select 
                                        type="text" 
                                        className="form-control"
                                        required  
                                        name="mem_year"  
                                        value={mem_year}
                                        onChange={onInputChange}
                                        >
                                            <option>Select Year</option>
                                            <option>1st</option>
                                            <option>2nd</option>
                                            <option>3rd</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="form-group">
                                    <label>Faculty <i><FaStar/></i></label>
                                        <select 
                                        type="text" 
                                        className="form-control"
                                        required  
                                        name="mem_faculty"  
                                        value={mem_faculty}
                                        onChange={onInputChange}
                                        >
                                            <option>Faculty</option>
                                            <option>BSCIT</option>
                                            <option>BBA</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Phone <i><FaStar/></i></label>
                                        <input 
                                        placeholder="Enter Phone Number" 
                                        type="number" 
                                        className="form-control"
                                        name="mem_phone" 
                                        required  
                                        value={mem_phone}
                                        onChange={onInputChange}
                                        />
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Address <i><FaStar/></i></label>
                                        <input 
                                        placeholder="Enter Address" 
                                        type="text" 
                                        className="form-control"
                                        name="mem_address" 
                                        required  
                                        value={mem_address}
                                        onChange={onInputChange}
                                        />
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Date Of Birth <i><FaStar/></i></label>
                                        <input 
                                        placeholder="Enter Date Of Birth" 
                                        type="date" 
                                        className="form-control"
                                        name="mem_dob" 
                                        required  
                                        value={mem_dob}
                                        onChange={onInputChange}
                                        />
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Age <i><FaStar/></i></label>
                                        <input 
                                        placeholder="Enter Age" 
                                        type="text" 
                                        className="form-control"
                                        name="mem_age" 
                                        required  
                                        value={mem_age}
                                        onChange={onInputChange}
                                        />
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="form-group">
                                    <label>Gender <i><FaStar/></i></label>
                                        <select 
                                        type="text" 
                                        className="form-control"
                                        required  
                                        name="mem_gender"  
                                        value={mem_gender}
                                        onChange={onInputChange}
                                        >
                                            <option>Select Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    </div>
                                </div>
                                    <button type="submit" className="btn btn-success" onClick={callToast}>SignUp</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <ToastContainer />
        </>
    );
}

export default Registration;