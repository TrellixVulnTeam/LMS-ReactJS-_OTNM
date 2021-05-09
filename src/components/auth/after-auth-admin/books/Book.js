import React, { useEffect, useState } from "react";
import AdminDashboardForAll from "../AdminDashboardForAll";
import {FaUserEdit, FaTrash, FaPlus, FaEye} from "react-icons/fa";
import {Link} from "react-router-dom";
import axios from "axios";

const Book = () =>{
    const [books, setBook] = useState([]);

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = async () => {
        const result = await axios.get("http://localhost:3001/books");
        setBook(result.data);
    };
    const deleteBook = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        loadBooks();
      };
    return(
        <>
            <section className="admin-global-view-section d-flex">
                <section>
                    <AdminDashboardForAll/>
                </section>
                <section>
                    <div className="container p-3">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="add-something-btn mb-3">
                                    <Link className="btn btn-outline-success" to="/auth/after-auth-admin/admin-dashboard/addbook">Add Book <i><FaPlus/></i></Link>
                                </div>
                            <table class="table table-bordered table-hover table-responsive">
                            <thead class="thead">
                                <tr>
                                <th scope="col">No</th>
                                <th scope="col">Book Title</th>
                                <th scope="col">Author Name</th>
                                <th scope="col">Edition</th>
                                <th scope="col">Publisher</th>
                                <th scope="col">Publication</th>
                                <th scope="col">Copies</th>
                                <th scope="col">Category</th>
                                <th scope="col">Rack</th>
                                <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    books.map((book, index)=>(
                                        <tr>
                                        <th scope="row">{index + 1 }</th>
                                        <td>{book.bk_title}</td>
                                        <td>{book.bk_author}</td>
                                        <td>{book.bk_edition}</td>
                                        <td>{book.bk_publisher}</td>
                                        <td>{book.bk_publication_date}</td>
                                        <td>{book.bk_copies}</td>
                                        <td>{book.bk_category}</td>
                                        <td>{book.bk_rack_no}</td>
                                        <td>
                                            <Link to={`/auth/after-auth-admin/admin-dashboard/bookview/${book.id}`} className="btn btn-outline-primary"><i><FaEye/></i></Link><br/>
                                            <Link to={`/auth/after-auth-admin/admin-dashboard/updatebook/${book.id}`} className="btn btn-outline-success mt-1"><i><FaUserEdit/></i></Link><br/>
                                            <Link onClick={() => deleteBook(book.id)} className="btn btn-outline-danger mt-1"><i><FaTrash/></i></Link>
                                        </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}
export default Book;