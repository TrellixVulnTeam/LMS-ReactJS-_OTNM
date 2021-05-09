import React, { useEffect, useState } from "react";
import AdminDashboardForAll from "../AdminDashboardForAll";
import {FaUserEdit, FaTrash, FaPlus, FaEye} from "react-icons/fa";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Admin = () =>{
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/users");
        setUsers(result.data);
    };
    const deleteBook = async (id) => {
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUsers();
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
                                    <Link className="btn btn-outline-success" to="/auth/after-auth-admin/admin-dashboard/addadmin">Add Admin <i><FaPlus/></i></Link>
                                </div>
                            <table class="table table-responsive table-bordered table-hover">
                            <thead class="thead">
                                <tr>
                                <th scope="col">No.</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Date Of Birth</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index)=>(
                                        <tr>
                                        <th scope="row">{index + 1 }</th>
                                        <td>{user.fname}</td>
                                        <td>{user.lname}</td>
                                        <td>{user.dob}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                        <td>
                                            <Link to={`/auth/after-auth-admin/admin-dashboard/adminview/${user.id}`} className="btn btn-outline-primary mr-2"><i><FaEye/></i></Link>
                                            <Link to={`/auth/after-auth-admin/admin-dashboard/updateadmin/${user.id}`} className="btn btn-outline-success mr-2"><i><FaUserEdit/></i></Link>
                                            <Link onClick={() => deleteBook(user.id)} className="btn btn-outline-danger"><i><FaTrash/></i></Link>
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
export default Admin;