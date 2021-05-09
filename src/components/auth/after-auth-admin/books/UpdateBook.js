import React, { useEffect, useState } from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import AdminDashboardForAll from "../AdminDashboardForAll";
import {FaStar, FaBackward, FaArrowDown, FaUpload} from "react-icons/fa";
import axios from "axios";

const UpdateBook = () =>{
    let history = useHistory();
    const {id} = useParams();
    const [books, setBooks] = useState({
        bk_title:"",
        bk_author:"",
        bk_edition:"",
        bk_publisher:"",
        bk_publication_date:"",
        bk_copies:"",
        bk_category:"",
        bk_rack_no:""
    });

    const { bk_title, bk_author, bk_edition, bk_publisher, bk_publication_date, bk_copies, bk_category, bk_rack_no} = books;
    const onInputChange = (e) => {
        setBooks({ ...books, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadBooks();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/books/${id}`, books);
        history.push("/auth/after-auth-admin/admin-dashboard/books");
    };

    const loadBooks = async () => {
        const result = await axios.get(`http://localhost:3001/books/${id}`);
        setBooks(result.data);
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
                            <form onSubmit={onSubmit}>
                            <div className="container add-book-form">
                            <div className="function-indicator">
                                <h3>Update Book <i><FaArrowDown/></i></h3>
                            </div>
                                <div className="row">
                                    <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Book Title <i><FaStar/></i></label>
                                        <input 
                                        placeholder="Enter Book Title" 
                                        type="text" 
                                        class="form-control" 
                                        required 
                                        name="bk_title"  
                                        value={bk_title}
                                        onChange={onInputChange}
                                        />
                                    </div>
                                    </div>
                                    <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Author Name <i><FaStar/></i></label>
                                        <input 
                                        placeholder="Enter Author Name" 
                                        type="text" class="form-control" 
                                        required 
                                        name="bk_author"  
                                        value={bk_author}
                                        onChange={onInputChange}
                                        />
                                    </div>
                                    </div>
                                    <div class="col-md-4">
                                    <div class="form-group">
                                        <label>Edition <i><FaStar/></i></label>
                                        <select 
                                        type="text" 
                                        class="form-control" 
                                        required
                                        name="bk_edition"  
                                        value={bk_edition}
                                        onChange={onInputChange}
                                        >
                                            <option>Select Edition</option>
                                            <option>1st</option>
                                            <option>2nd</option>
                                            <option>3rd</option>
                                            <option>4th</option>
                                            <option>5th</option>
                                            <option>6th</option>
                                            <option>7th</option>
                                            <option>8th</option>
                                            <option>9th</option>
                                            <option>10th</option>
                                            <option>11th</option>
                                            <option>12th</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div class="form-group">
                                        <label>Publisher <i><FaStar/></i></label>
                                        <input 
                                        placeholder="Enter Publisher" 
                                        type="text" 
                                        class="form-control" 
                                        required 
                                        name="bk_publisher"  
                                        value={bk_publisher}
                                        onChange={onInputChange}
                                        />
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div class="form-group">
                                        <label>Publication Date <i><FaStar/></i></label>
                                        <input 
                                        placeholder="Enter Publication_date" 
                                        type="date" 
                                        class="form-control" 
                                        required 
                                        name="bk_publication_date"  
                                        value={bk_publication_date}
                                        onChange={onInputChange}
                                        />
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div class="form-group">
                                        <label>Copies <i><FaStar/></i></label>
                                        <input 
                                        placeholder="Enter Book Copies" 
                                        type="numbers" 
                                        class="form-control" 
                                        required 
                                        name="bk_copies"  
                                        value={bk_copies}
                                        onChange={onInputChange}
                                        />
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div class="form-group">
                                    <label>Category <i><FaStar/></i></label>
                                        <select 
                                        type="text" 
                                        class="form-control"
                                        required
                                        name="bk_category"  
                                        value={bk_category}
                                        onChange={onInputChange}
                                        >
                                            <option>Category</option>
                                            <option>Networking</option>
                                            <option>Database</option>
                                            <option>Programming</option>
                                            <option>Designing</option>
                                            <option>Science</option>
                                            <option>Management</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div class="form-group">
                                        <label>Rack No. <i><FaStar/></i></label>
                                        <input 
                                        placeholder="Enter Rack No" 
                                        type="text" 
                                        class="form-control" 
                                        required 
                                        name="bk_rack_no"  
                                        value={bk_rack_no}
                                        onChange={onInputChange}
                                        />
                                    </div>
                                    </div>
                                </div>
                                    <div><button type="submit" className="btn btn-success">Update Data <i><FaUpload/></i></button></div>
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
export default UpdateBook;