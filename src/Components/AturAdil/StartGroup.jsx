import React from "react";
import { Link } from "react-router-dom";

const StartGroup = () => {

    return (
        <div class="container my-5">
            <form class="make-group border border-warning p-5 mb-2 border-opacity-50">
                <label for="judulKelompok" class="form-label pt-4">
                    <h3 class="fw-bold">Judul/Topik Pembuatan Kelompok</h3>
                </label>
                <input type="text" class="form-control" id="judulKelompok" placeholder="contoh: kelompok matemetika IPA 2"/>
                <div class="row mb-3">
                    <div class="col">
                        <label for="jumlahKelompok" class="form-label pt-4"><h4 class="fw-bold">Jumlah Kelompok</h4></label>
                        <input type="number" class="form-control" id="jumlahKelompok"/>
                    </div>
                    <div class="col d-flex align-items-end">
                        <button type="button" class="btn btn-outline-dark mt-2">Atur Kode</button>
                        <h4 class="ms-5">Kode : dwe2483HKB</h4>
                    </div>
                </div>
                <div class="d-flex justify-content-center mt-5">
                    <Link to="/resultgroup0" class="btn btn-warning fw-bold">Periksa Hasil</Link>
                </div>
            </form>
        </div>
    )
}

export default StartGroup;