import React, { useCallback } from "react";
import brandImg from "../../images/logo.png";
import {FaSearch} from "react-icons/fa";
import emailSvg from "../../images/email.svg";
import phoneSvg from "../../images/call.svg";

const LogoSection = () =>{
    return(
        <>
            <section className="logo-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                        <div className="brand-logo">
                            <img src={brandImg} alt="brand-logo" />
                        </div>
                        </div>
                        <div className="col-md-5">
                            <div className="my-search-btn">
                            <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <button id="my-search-box" className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                                <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                                <div role="separator" className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Separated link</a>
                                </div>
                            </div>
                            <input type="text" className="form-control" id="my-form-control" aria-label="Text input with dropdown button" />
                            <div className="input-group-prepend">
                                <div className="input-group-text" id="search-btn-lms">
                                    <a href="#"><i><FaSearch /></i></a>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="top-contact-info">
                                <div className="icon-container mr-5">
                                    <div className="my-image-container">
                                        <img src={phoneSvg} alt="secon-555" />
                                    </div>
                                    <div className="my-info-container ml-3">
                                        <span>call us</span>
                                        <p>555 51243</p>
                                    </div>
                                </div>
                                <div className="icon-container mr-5">
                                    <div className="my-image-container">
                                        <img src={emailSvg} alt="secon-555" />
                                    </div>
                                    <div className="my-info-container ml-3">
                                        <span>oreland@gmail.com</span>
                                        <p>555 51243</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default LogoSection;