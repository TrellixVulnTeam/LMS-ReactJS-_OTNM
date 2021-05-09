import React, {useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import AdminDashboardForAll from "../AdminDashboardForAll";
import {FaStar, FaBackward, FaArrowDown, FaPlus} from "react-icons/fa";
import axios from "axios";

const UpdateMember = () =>{
    const history = useHistory();
    const { id } = useParams();
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

    useEffect(() => {
        loadMembers();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/members/${id}`, members);
        history.push("/auth/after-auth-admin/admin-dashboard/member");
    };

    const loadMembers = async () => {
        const result = await axios.get(`http://localhost:3001/members/${id}`);
        setMember(result.data);
    };

    return(
        <>
            <section className="admin-global-view-section d-flex">
                <section>
                    <AdminDashboardForAll/>
                </section>
                <section className="w-100">
                    <div className="container p-3">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="add-something-btn mb-3">
                                    <Link className="btn btn-outline-primary" to="/auth/after-auth-admin/admin-dashboard/books">Back To List <i><FaBackward/></i></Link>
                                </div>
                            <form onSubmit={onSubmit} autoComplete="off">
                            <div className="container add-book-form">
                            <div className="function-indicator">
                                <h3>Add New Book <i><FaArrowDown/></i></h3>
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
                                    <button type="submit" className="btn btn-success">Add Member <i><FaPlus/></i></button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}
export default UpdateMember;