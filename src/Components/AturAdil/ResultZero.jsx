import React from "react";
import { Link } from "react-router-dom";

const ResultZero = () => {

    return (
        <div class="container-sm my-5 result">
            <h1 class="fw-bold">Hasil Pembagian Kelompok</h1>
            <div class="mt-5 result-info">
                <div class="row">
                    <div class="col">Total yang telah mengisi</div>
                    <div class="col">: 0</div>
                </div>
                <div class="row">
                    <div class="col">Kode</div>
                    <div class="col">: 231G3VJHVJ</div>
                </div>
                <div class="row">
                    <div class="col">Jumlah Kelompok</div>
                    <div class="col">: 6</div>
                </div>
            </div>
            <section className="hasil-bagi my-5">
                <h2 className="text-center mb-3">DATA KOSONG! SILAHKAN MENGISI DATA PADA JOIN KELOMPOK</h2>
                <div className="d-flex justify-content-center">
                <Link to="/joingroup" className="btn btn-secondary">JOIN KELOMPOK</Link>
                </div>
            </section>
        </div>
    )
}

export default ResultZero;