import React, { useEffect, useState } from "react";
import cartImg from "../../images/typing.png";
import Category from "../child/Category";
import {FaBookReader, FaArrowRight} from "react-icons/fa";
import axios from "axios";

const Home = () => {
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        loadBooks();
      }, []);

    const loadBooks = async () => {
        const result = await axios.get("http://localhost:3001/books");
        setBooks(result.data);
      };
  return (
    <>
      <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <Category data="Home"/>
                    </div>
                    <div class="col-md-9">
                        <section className="my-g-section">
                        <h3>Featured Books <i><FaArrowRight /></i></h3>
                        <div className="row">
                        {
                            books.map((book, index) => (
                            <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-image-container">
                                            <img src={cartImg} alt="img"/>
                                        </div>
                                        <div className="card-info-container">
                                                <div className="card-icon-indicate">
                                                        <i><FaBookReader /></i>
                                                </div>
                                                <div className="book-name">
                                                    <h1>{book.bk_title}</h1>
                                                    <p>Author : {book.bk_author}</p>
                                                    <p>Edition : {book.bk_edition}</p>
                                                    <p>Publisher : {book.bk_publisher}</p>
                                                    <p>Publication : {book.bk_publication_date}</p>
                                                    <p>Category : {book.bk_category}</p>
                                                    <a href="#">Borrow Now<FaArrowRight /></a>
                                                </div>

                                        </div>
                                    </div>
                                    </div> 
                        ))
                        }
                        </div>
                        </section>
                    </div>
                </div>
            </div>
    </>
  );
};

export default Home;
