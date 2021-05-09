import React from "react";
import {Route, Link, useLocation} from "react-router-dom";
import {FaFacebookF, FaInstagram, FaLinkedin, FaSignOutAlt, FaGoogle, FaTwitter, FaSignInAlt, FaUser} from "react-icons/fa";


const TopNavigation = () =>{
  const location = useLocation();
  console.log(location);
    return(
        <>
            <section className="top-navigation-section">
            <div className="top-navigation-container"> 
                <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                        <div className="my-login">
                        <ul>
                            {location.pathname === `/auth/after-auth-admin/admin-dashboard/books`?<li className="ml-3"><Link to="/">Logout <FaSignOutAlt className="my-g-icons"/></Link></li>:null }
                            {location.pathname === `/auth/after-auth-admin/admin-dashboard/addbook`?<li className="ml-3"><Link to="/">Logout <FaSignOutAlt className="my-g-icons"/></Link></li>:null }
                            {location.pathname === `/auth/after-auth-admin/admin-dashboard/updatebook`?<li className="ml-3"><Link to="/">Logout <FaSignOutAlt className="my-g-icons"/></Link></li>:null }
                            {location.pathname === `/auth/after-auth-admin/admin-dashboard/admin`?<li className="ml-3"><Link to="/">Logout <FaSignOutAlt className="my-g-icons"/></Link></li>:null }
                            {location.pathname === `/auth/after-auth-admin/admin-dashboard/member`?<li className="ml-3"><Link to="/">Logout <FaSignOutAlt className="my-g-icons"/></Link></li>:null }


                            {location.pathname === `/books`?<li className="ml-3"><Link to="/auth/login">Login <FaUser/><span className="ml-3">|</span></Link></li>:null }
                            {location.pathname === `/books`?<li className="ml-3"><Link to="/auth/registration">Signup <FaSignInAlt className="my-g-icons"/></Link></li>:null }

                            {location.pathname === `/about`?<li className="ml-3"><Link to="/auth/login">Login <FaUser/><span className="ml-3">|</span></Link></li>:null }
                            {location.pathname === `/about`?<li className="ml-3"><Link to="/auth/registration">Signup <FaSignInAlt className="my-g-icons"/></Link></li>:null }

                            {location.pathname === `/`?<li className="ml-3"><Link to="/auth/login">Login <FaUser/><span className="ml-3">|</span></Link></li>:null }
                            {location.pathname === `/`?<li className="ml-3"><Link to="/auth/registration">Signup <FaSignInAlt className="my-g-icons"/></Link></li>:null }
                            
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="my-social-icons">
                        <ul>
                            <li>
                            <a href="#">
                                <div className="top-navigation-social-icons">
                                    <FaFacebookF className="my-social-icons"/>
                                </div>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <div className="top-navigation-social-icons">
                                    <FaInstagram className="my-social-icons"/>
                                </div>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <div className="top-navigation-social-icons">
                                    <FaTwitter className="my-social-icons"/>
                                </div>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <div className="top-navigation-social-icons">
                                    <FaLinkedin className="my-social-icons"/>
                                </div>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <div className="top-navigation-social-icons">
                                    <FaGoogle className="my-social-icons"/>
                                </div>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
}
export default TopNavigation;