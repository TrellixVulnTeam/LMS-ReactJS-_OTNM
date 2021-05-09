import React from "react";
import Category from "./Category";
import aboutImg from "../../images/sign-up-bg.jpg";

const About = () =>{
    return(
        <>
        <section className="about-us-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <Category data="About Us"/>
                    </div>
                    <div class="col-md-9">
                    <div className="about-us-wrapper">
                        <div className="about-intro">
                            <h3>Oreland Library Management System</h3>
                            <p>A Library Management System is a software built to handle the primary housekeeping functions of a library. ... Library management systems also involve maintaining the database for entering new books and recording books that have been borrowed with their respective due dates.</p>
                        </div>
                        <div className="about-image">
                            <img src={aboutImg} alt="about-image" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
}
export default About;