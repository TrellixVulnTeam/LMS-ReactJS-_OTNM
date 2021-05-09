import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./scss/styles.scss";
import "./scss/fontawesome/fontawesome.min.css";


ReactDOM.render(
    <>
        <section className="management-system-wrapper">
            <App/>
        </section>
    </>, 
    document.getElementById("root")
    );