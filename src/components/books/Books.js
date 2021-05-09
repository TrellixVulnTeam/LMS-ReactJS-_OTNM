import React, { useEffect, useState } from "react";
import Category from "../child/Category";
import {FaBook, FaArrowRight} from "react-icons/fa";
import axios from "axios";

const Books = () =>{
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        loadBooks();
      }, []);

    const loadBooks = async () => {
        const result = await axios.get("http://localhost:3001/books");
        setBooks(result.data);
      };
    return(
        <>
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <Category data="Books"/>
                    </div>
                    <div class="col-md-9">
                        <section className="my-g-section">
                        <h3>All Books <i><FaArrowRight /></i></h3>
                        <table class="table">
                            <thead class="thead">
                                <tr>
                                <th scope="col">No</th>
                                <th scope="col">Book Title</th>
                                <th scope="col">Author Name</th>
                                <th scope="col">Edition</th>
                                <th scope="col">Publisher</th>
                                <th scope="col">Publication Date</th>
                                <th scope="col">Category</th>
                                <th scope="col"><FaBook/></th>
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
                                        <td>{book.bk_category}</td>
                                        <td><a href="#" className="btn btn-outline-success">Borrow</a></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                            </table>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Books;
