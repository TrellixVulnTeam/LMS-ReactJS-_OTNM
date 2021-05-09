import React, { useEffect, useState } from "react";
import AdminDashboardForAll from "../AdminDashboardForAll";
import {FaUserEdit, FaTrash, FaPlus, FaEye} from "react-icons/fa";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Book = () =>{
    const [members, setMembers] = useState([]);

    useEffect(() => {
        loadMembers();
    }, []);

    const loadMembers = async () => {
        const result = await axios.get("http://localhost:3001/members");
        setMembers(result.data);
    };
    const deleteBook = async (id) => {
        await axios.delete(`http://localhost:3001/members/${id}`);
        loadMembers();
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
                                    <Link className="btn btn-outline-success" to="/auth/after-auth-admin/admin-dashboard/addmember">Add Member <i><FaPlus/></i></Link>
                                </div>
                            <table class="table table-bordered table-hover table-responsive">
                            <thead class="thead">
                                <tr>
                                <th scope="col">No</th>
                                <th scope="col">Fname</th>
                                <th scope="col">Lname</th>
                                <th scope="col">email</th>
                                <th scope="col">Year</th>
                                <th scope="col">Faculty</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Address</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Age</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    members.map((member, index)=>(
                                        <tr>
                                        <th scope="row">{index + 1 }</th>
                                        <th>{member.mem_fname}</th>
                                        <th>{member.mem_lname}</th>
                                        <th>{member.mem_email}</th>
                                        <th>{member.mem_year}</th>
                                        <th>{member.mem_faculty}</th>
                                        <th>{member.mem_phone}</th>
                                        <th>{member.mem_address}</th>
                                        <th>{member.mem_dob}</th>
                                        <th>{member.mem_age}</th>
                                        <th>{member.mem_gender}</th>
                                        <td>
                                            <Link to={`/auth/after-auth-admin/admin-dashboard/memberview/${member.id}`} className="btn btn-outline-primary"><i><FaEye/></i></Link><br/>
                                            <Link to={`/auth/after-auth-admin/admin-dashboard/updatemember/${member.id}`} className="btn btn-outline-success mt-1"><i><FaUserEdit/></i></Link><br/>
                                            <Link onClick={() => deleteBook(member.id)} className="btn btn-outline-danger mt-1"><i><FaTrash/></i></Link>
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