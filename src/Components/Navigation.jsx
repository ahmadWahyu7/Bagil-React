import React from "react";
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid batas">
                    <Link class="navbar-brand  fw-bold" to="/">BAGIL</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse text-right" id="navbarText">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link to="/dashboard" class="nav-link">Atur Adil</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/aturacak" class="nav-link">Atur Acak</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/contact" class="nav-link">Kontak Kami</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/login" class="btn btn-dark ms-3">Log in</Link>
                        <Link to="/signup" class="btn btn-light btn-outline-dark ms-3">Sign Up</Link>
                    </li>
                    <li class="nav-item">
                        <img src="https://picsum.photos/40" class="rounded-circle ms-3" alt="foto profil"/>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;