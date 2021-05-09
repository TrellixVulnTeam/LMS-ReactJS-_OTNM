import React, {useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import AdminDashboardForAll from "../AdminDashboardForAll";
import {FaStar, FaBackward, FaArrowDown, FaPlus} from "react-icons/fa";
import axios from "axios";

const UpdateAdmin = () =>{
    const history = useHistory();
    const { id } = useParams();
    const [admin, setAdmin] = useState({
        fname:"",
        lname:"",
        dob:"",
        phone:"",
        email:"",
        password:""
    });

    const { fname, lname, dob, phone, email, password } = admin;
    const onInputChange = (e) => {
        setAdmin({ ...admin, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadAdmin();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`, admin);
        history.push("/auth/after-auth-admin/admin-dashboard/admin");
    };

    const loadAdmin = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`);
        setAdmin(result.data);
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
                                    <Link className="btn btn-outline-primary" to="/auth/after-auth-admin/admin-dashboard/admin">Back To List <i><FaBackward/></i></Link>
                                </div>
                            <form onSubmit={onSubmit} autoComplete="off">
                            <div className="container add-book-form">
                            <div className="function-indicator">
                                <h3>Add New Admin <i><FaArrowDown/></i></h3>
                            </div>
                                <div className="row">
                                    <div className="col-md-4">
                                    <div className="form-group">
                                        <label>First Name <i><FaStar/></i></label>
                                        <input  
                                        placeholder="Enter First Name" 
                                        type="text" className="form-control"
                                        required 
                                        name="fname"  
                                        value={fname}
                                        onChange={onInputChange}
                                        />
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Last Name <i><FaStar/></i></label>
                                        <input 
                                        placeholder="Enter Last Name" 
                                        type="text" 
                                        className="form-control" 
                                        required  
                                        name="lname"  
                                        value={lname}
                                        onChange={onInputChange}
                                        />
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Date Of Birth <i><FaStar/></i></label>
                                        <input 
                                        placeholder="Date Of Birth"
                                        type="date" 
                                        className="form-control"
                                        required   
                                        name="dob"  
                                        value={dob}
                                        onChange={onInputChange}
                                        />
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Contact Number <i><FaStar/></i></label>
                                        <input 
                                        placeholder="Enter Phone Number" 
                                        type="number" 
                                        className="form-control"
                                        required  
                                        name="phone"  
                                        value={phone}
                                        onChange={onInputChange}
                                        />
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Email <i><FaStar/></i></label>
                                        <input 
                                        placeholder="Enter Email" 
                                        type="email" 
                                        className="form-control"
                                        required  
                                        name="email"  
                                        value={email}
                                        onChange={onInputChange}
                                        />
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Password <i><FaStar/></i></label>
                                        <input 
                                        placeholder="Enter Password" 
                                        type="password" 
                                        className="form-control"
                                        required  
                                        name="password"  
                                        value={password}
                                        onChange={onInputChange}
                                        />
                                    </div>
                                    </div>
                                </div>
                                    <button type="submit" className="btn btn-success">Add Book <i><FaPlus/></i></button>
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
export default UpdateAdmin;