import React from "react";

const ResultOne = () => {

    return (
        <div class="container-sm my-5 result">
            <h1 class="fw-bold">Hasil Pembagian Kelompok</h1>
            <div class="mt-5 result-info">
                <div class="row">
                    <div class="col">Total yang telah mengisi</div>
                    <div class="col">: 1</div>
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
            <div class="d-flex justify-content-evenly flex-wrap mt-3">
                <div class="card mt-3">
                    <div class="card-header">Kelompok 1</div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Wahyu</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ResultOne;