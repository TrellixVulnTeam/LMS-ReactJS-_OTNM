import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {FaBackward, FaPlus} from "react-icons/fa";
import AdminDashboardForAll from "../AdminDashboardForAll";
import profileImage from "../../../../images/my_img.jpg";
import axios from "axios";

const MemberView = () => {
  const [views, setViews] = useState({
    bk_title:"",
    bk_author:"",
    bk_edition:"",
    bk_publisher:"",
    bk_publication_date:"",
    bk_copies:"",
    bk_category:"",
    bk_rack_no:""
  });

  const { id } = useParams();

  useEffect(() => {
    loadViews();
  }, []);
  const loadViews = async () => {
    const res = await axios.get(`http://localhost:3001/members/${id}`);
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
                                    <Link className="btn btn-outline-primary" to="/auth/after-auth-admin/admin-dashboard/member">Back <i><FaBackward/></i></Link>
                                </div>
                                <div className="book-profile-heading"><h3>Book Details</h3> </div>
                                <div className="row my-profile-container">
                                    <div className="col-md-4">
                                        <div className="profile-image-container">  
                                            <img src={profileImage} alt="alt.png" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="profile-info">
                                            <h3>Member ID: <span>{views.id}</span></h3>
                                            <h3>First Name: <span>{views.mem_fname}</span></h3>
                                            <h3>Last Name: <span>{views.mem_lname}</span></h3>
                                            <h3>Email: <span>{views.mem_email}</span></h3>
                                            <h3>Password: <span>{views.mem_password}</span></h3>
                                            <h3>Year: <span>{views.mem_year}</span></h3>
                                            <h3>Faculty: <span>{views.mem_faculty}</span></h3>
                                            <h3>Phone: <span>{views.mem_phone}</span></h3>
                                            <h3>Address: <span>{views.mem_address}</span></h3>
                                            <h3>Date Of Birth: <span>{views.mem_dob}</span></h3>
                                            <h3>Age: <span>{views.mem_age}</span></h3>
                                            <h3>Gender: <span>{views.mem_gender}</span></h3>
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

export default MemberView;
