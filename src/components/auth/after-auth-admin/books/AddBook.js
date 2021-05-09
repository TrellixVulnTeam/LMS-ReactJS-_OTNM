import React, {useState } from "react";
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";
import AdminDashboardForAll from "../AdminDashboardForAll";
import {FaStar, FaBackward, FaArrowDown, FaPlus} from "react-icons/fa";
import axios from "axios";

const AddBook = () =>{
    const history = useHistory();
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

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3001/books", books);
        history.push("/auth/after-auth-admin/admin-dashboard/books");
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
                                        <label>Book Title <i><FaStar/></i></label>
                                        <input  
                                        placeholder="Enter Book Title" 
                                        type="text" className="form-control"
                                        required 
                                        name="bk_title"  
                                        value={bk_title}
                                        onChange={onInputChange}
                                        />
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Author Name <i><FaStar/></i></label>
                                        <input 
                                        placeholder="Enter Author Name" 
                                        type="text" 
                                        className="form-control" 
                                        required  
                                        name="bk_author"  
                                        value={bk_author}
                                        onChange={onInputChange}
                                        />
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Edition <i><FaStar/></i></label>
                                        <select 
                                        type="text" 
                                        className="form-control"
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
                                    <div className="form-group">
                                        <label>Publisher <i><FaStar/></i></label>
                                        <input 
                                        placeholder="Enter Publisher"
                                        type="text" 
                                        className="form-control"
                                        required   
                                        name="bk_publisher"  
                                        value={bk_publisher}
                                        onChange={onInputChange}
                                        />
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Publication Date <i><FaStar/></i></label>
                                        <input 
                                        placeholder="Enter Publication Date" 
                                        type="date" 
                                        className="form-control"
                                        required  
                                        name="bk_publication_date"  
                                        value={bk_publication_date}
                                        onChange={onInputChange}
                                        />
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Copies <i><FaStar/></i></label>
                                        <input 
                                        placeholder="Enter Book Copies" 
                                        type="number" 
                                        className="form-control"
                                        required  
                                        name="bk_copies"  
                                        value={bk_copies}
                                        onChange={onInputChange}
                                        />
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="form-group">
                                    <label>Category <i><FaStar/></i></label>
                                        <select 
                                        type="text" 
                                        className="form-control"
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
                                    <div className="form-group">
                                        <label>Rack No. <i><FaStar/></i></label>
                                        <input 
                                        placeholder="Enter Rack No (1row-1column)" 
                                        type="text" 
                                        className="form-control"
                                        name="bk_rack_no" 
                                        required  
                                        value={bk_rack_no}
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
export default AddBook;