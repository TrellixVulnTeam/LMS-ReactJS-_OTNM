import React from "react";
import {Link} from "react-router-dom";
import {FaEnvelope, FaUser, FaSignInAlt, FaKey} from "react-icons/fa";

const Login = () =>{
    return(
        <>
            <section className="auth-section">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="my-login-container">
                            <div className="featued-icon">
                                <i><FaUser/></i>
                            </div>
                        <form>
                            <h3>LOGIN</h3>
                            <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><FaEnvelope /></div>
                            </div>
                            <input autoComplete="off" type="email" className="form-control"/>
                            </div>
                            <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><FaKey /></div>
                            </div>
                            <input autoComplete="off" type="password" className="form-control" />
                            </div>
                            <div className="login-submit-btn">
                                <Link to="/auth/after-auth-admin/admin-dashboard/books" className="btn btn-success mb-2">Login <FaSignInAlt/></Link><br/>
                                <Link to="/auth/registration">Create Account</Link>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
}

export default Login;