import React from "react";

const JoinGroup = () => {

    return (
        <div>
            <div class="d-flex justify-content-center pt-5 pb-5">
                <div class="form-group row w-50">
                <label for="judulKelompok" class="form-label pt-4">Masukan Kode Unik</label>
                <input type="text" class="form-control" id="judulKelompok"/>
            
                <button type="button" class="btn btn-dark mt-2">Submit</button><br/>
                <button type="button" class="btn btn-light btn-outline-dark mt-2">Lihat Hasil</button>
                </div>
            </div>
        </div>
    )
}

export default JoinGroup;