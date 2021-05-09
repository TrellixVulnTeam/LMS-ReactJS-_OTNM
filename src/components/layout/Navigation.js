import React from "react";
import {Link, useLocation} from "react-router-dom";
import {FaSlidersH} from "react-icons/fa";

const Navigation = () =>{
    const location = useLocation();
    return(
        <>
            <section className="main-navigation-section">
                <div className="menu">
                    <ul>
                        <li><Link exact className="link-style"><i className="mr-2"><FaSlidersH /></i> CATEGORY</Link></li>
                        <li><Link exact className="link-style" to="/">HOME</Link></li>
                        <li><Link exact className="link-style" to="/about">ABOUT US</Link></li>
                        <li><Link exact className="link-style" to="/books">BOOKS</Link></li>
                        {location.pathname === `/auth/after-auth-admin/admin-dashboard` ? <li><Link exact className="link-style" to="/auth/after-auth-admin/admin-dashboard">ADMIN</Link></li> : null}
                        {location.pathname === `/auth/after-auth-admin/admin-dashboard/books` ? <li><Link exact className="link-style" to="/auth/after-auth-admin/admin-dashboard/books">ADMIN</Link></li> : null}
                        {location.pathname === `/auth/after-auth-admin/admin-dashboard/addbook` ? <li><Link exact className="link-style" to="/auth/after-auth-admin/admin-dashboard/books">ADMIN</Link></li> : null}
                        {location.pathname === `/auth/after-auth-admin/admin-dashboard/updatebook` ? <li><Link exact className="link-style" to="/auth/after-auth-admin/admin-dashboard/books">ADMIN</Link></li> : null}
                    </ul>
                </div>
            </section>
        </>
    );
}
export default Navigation;