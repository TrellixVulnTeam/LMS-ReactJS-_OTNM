import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {FaBackward, FaPlus} from "react-icons/fa";
import AdminDashboardForAll from "../AdminDashboardForAll";
import profileImage from "../../../../images/my_img.jpg";
import axios from "axios";

const AdminView = () => {
  const [views, setViews] = useState({
    fname:"",
    lname:"",
    dob:"",
    phone:"",
    email:"",
    password:""
  });

  const { id } = useParams();

  useEffect(() => {
    loadViews();
  }, []);
  const loadViews = async () => {
    const res = await axios.get(`http://localhost:3001/users/${id}`);
    setViews(res.data);
  };
  return (
    <section className="admin-global-view-section d-flex">
                <section>
                    <AdminDashboardForAll/>
                </section>
                <section>
                    <div className="container p-3">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="add-something-btn mb-3">
                                    <Link className="btn btn-outline-primary" to="/auth/after-auth-admin/admin-dashboard/admin">Back <i><FaBackward/></i></Link>
                                </div>
                                <div className="book-profile-heading"><h3>User Details</h3> </div>
                                <div className="row my-profile-container">
                                    <div className="col-md-4">
                                        <div className="profile-image-container">  
                                            <img src={profileImage} alt="alt.png" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="profile-info">
                                            <h3>First Name: <span>{views.fname}</span></h3>
                                            <h3>Last Name: <span>{views.lname}</span></h3>
                                            <h3>Date Of Birth: <span>{views.dob}</span></h3>
                                            <h3>Email: <span>{views.email}</span></h3>
                                            <h3>password: <span>{views.password}</span></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
  );
};

export default AdminView;
