import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {

    return (
        <div class="container-fluid p-5 text-center">
            <h1 class="welcome fw-bold pb-5">Selamat Datang Irfan!</h1>
            <div class="d-flex justify-content-center align-items-center">
                <Link to="/startgroup" class="btn btn-warning btn-service me-3 px-5 py-3 d-flex flex-wrap">Buat Pembagian Kelompok</Link>
                <Link to="/joingroup" class="btn btn-light btn-outline-warning btn-service px-5 py-3 d-flex flex-wrap">Join Pembagian Kelompok</Link>
            </div>
        </div>
    )
}

export default Dashboard;