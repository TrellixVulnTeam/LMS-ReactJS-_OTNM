import React from "react";
import {Link} from "react-router-dom";
import {FaBook, FaLayerGroup, FaUserAlt, FaBookReader, FaQuestionCircle, FaCheck} from "react-icons/fa";

const AdminDashboardForAll = () =>{
    return(
        <>
            <section className="dashnoard-nav-section">
                <div className="dashboard-menu">
                    <ul>
                    <h3>Admin Dashboard</h3>
                    <div className="dashboard-line-break"></div>
                    <li><Link to="/auth/after-auth-admin/admin-dashboard/books"><i><FaBook/></i>Manage Books</Link></li>
                    <li><Link to="/auth/after-auth-admin/admin-dashboard/member"><i><FaLayerGroup/></i>Manage Members</Link></li>
                    <li><Link to="/auth/after-auth-admin/admin-dashboard/admin"><i><FaUserAlt/></i>Manage Admin</Link></li>
                    <li><a href="#"><i><FaBookReader/></i>Borrowed Book</a></li>
                    <li><a href="#"><i><FaCheck/></i>Returned</a></li>
                    <li><a href="#"><i><FaQuestionCircle/></i>Not Returned</a></li>
                    </ul>
                </div>
            </section>
        </>
    );
}
export default AdminDashboardForAll;