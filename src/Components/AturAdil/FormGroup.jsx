import React from "react";
import { Link } from "react-router-dom";

const FormGroup = () => {

    return (
        <div class="container">
            <h1 class="fw-bold pt-5 pb-3">isi Pertanyaan Berikut dengan JUJUR</h1>
            <div class="row justify-content-center">
            <div class="col-sm-6">
                <h3>Penilaian Akademik</h3>
                <label for="nama" class="form-label pt-4">Nama</label>
                <input type="text" class="form-control" id="nama"/>

                <label for="nilaiUts" class="form-label pt-4">Nilai UTS</label>
                <input type="text" class="form-control" id="nilaiUts"/>

                <label for="nilaiTugas" class="form-label pt-4">Nilai Tugas</label>
                <input type="text" class="form-control" id="nilaiTugas"/>
            </div>
            <div class="col-sm-6">
                <h3>Penilaian Softskills</h3>
                <h5 class="pt-4">Tanggung Jawab</h5>
                <div class="d-flex">
                <p>Kurang</p>
                <div class="form-check form-check-inline">
                    <input class="form-check-input m-1" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio2">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio2">3</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio2">4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio2">5</label>
                </div>
                <p>Baik</p>
                </div>

                <h5 class="pt-4">Mandiri</h5>
                <div class="d-flex">
                <p>Kurang</p>
                <div class="form-check form-check-inline">
                    <input class="form-check-input m-1" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio2">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio2">3</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio2">4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio2">5</label>
                </div>
                <p>Baik</p>
                </div>

                <h5 class="pt-4">Fast Respon</h5>
                <div class="d-flex">
                <p>Kurang</p>
                <div class="form-check form-check-inline">
                    <input class="form-check-input m-1" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio2">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio2">3</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio2">4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio2">5</label>
                </div>
                <p>Baik</p>
                </div>
            </div>

            <Link to="/resultgroup" class="btn btn-dark mt-2 mb-5 col-auto">Periksa Hasil</Link>
            </div>
        </div>
    )
}

export default FormGroup;