import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {FaBackward, FaPlus} from "react-icons/fa";
import AdminDashboardForAll from "../AdminDashboardForAll";
import profileImage from "../../../../images/my_img.jpg";
import axios from "axios";

const BookView = () => {
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
    const res = await axios.get(`http://localhost:3001/books/${id}`);
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
                                    <Link className="btn btn-outline-primary" to="/auth/after-auth-admin/admin-dashboard/books">Back <i><FaBackward/></i></Link>
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
                                            <h3>Title: <span>{views.bk_title}</span></h3>
                                            <h3>Author: <span>{views.bk_author}</span></h3>
                                            <h3>Edition: <span>{views.bk_edition}</span></h3>
                                            <h3>Publisher: <span>{views.bk_publisher}</span></h3>
                                            <h3>Publication Date: <span>{views.bk_publication_date}</span></h3>
                                            <h3>Category: <span>{views.bk_category}</span></h3>
                                            <h3>Copies: <span>{views.bk_copies}</span></h3>
                                            <h3>Rack No: <span>{views.bk_rack_no}</span></h3>
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

export default BookView;
