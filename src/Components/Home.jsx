import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <main class="container-fluid">
            <div class="container pt-5 pb-5">
                <section class="row my-5 pt-4">
                    <div class="title col-sm-5 col-12">
                        <h1 class="mt-3 fw-bold">BAGIL</h1>
                        <h3>Bagi Kelompokmu dengan Adil</h3>
                        <p>
                        website yang akan membantu membagi kelompok berdasarkan hasil test individu sehingga anggota kelompokmu akan lebih beragam dan tidak monoton
                        </p>
                        <Link to="/dashboard" class="btn-hero btn btn-lg mt-2 fw-bold">Atur Kelompok Sekarang</Link>
                    </div>
                    <div class="col-sm-7 col-12 d-flex justify-content-center align-items-center">
                        <img src="https://media.istockphoto.com/id/1283874510/id/vektor/sepasang-gambar-simbol-timbangan.jpg?s=612x612&w=0&k=20&c=GZaub0pTJNQCpPANeNMLuVrsv0kyoMMv5eXCONea9eY=" alt="gambar timbangan"/>
                    </div>
                </section>
                <section class="row my-5 mx-3">
                    <h1 class="mb-3 text-center">KENAPA PEMBAGIAN KELOMPOK SECARA ADIL ITU PENTING??</h1>
                    <div class="col">
                        <div class="d-flex justify-content-center">
                            <img src="https://cdn.pixabay.com/photo/2014/04/03/11/51/circle-312343_1280.png" alt="gambar kelompok" class="gambar-lb"/>
                        </div>
                    </div>
                    <div class="col d-flex align-items-center">
                        <p>Pembagian kelompok yang adil merupakan hal yang penting karena itu memastikan kesempatan yang sama bagi setiap anggota kelompok untuk berpartisipasi, berkontribusi, dan mendapatkan manfaat yang setara. Melalui pembagian yang adil, kita menghormati hak-hak individu, menciptakan lingkungan inklusif yang menghargai diversitas, memaksimalkan potensi pembelajaran, meningkatkan keterampilan sosial, meningkatkan motivasi dan keterlibatan anggota, serta mencegah diskriminasi dan stereotip yang dapat merugikan kelompok-kelompok tertentu. Dengan demikian, pembagian kelompok yang adil tidak hanya memberikan manfaat bagi individu-individu, tetapi juga membentuk masyarakat yang lebih adil dan inklusif.</p>
                    </div>   
                </section>
                <section class="my-5">
                    <h1 class="mb-3 text-center">Kenapa HARUS membagi kelompok menggunakan BADIL</h1>
                    <div class="d-flex justify-content-evenly flex-wrap">
                        <div class="card card-home">
                            <div class="d-flex justify-content-center">
                                <img src="https://cdn.iconscout.com/icon/free/png-512/free-scale-167-444960.png?f=avif&w=256" class="card-img-top img-icon" alt="icon"/>
                            </div>
                            <div class="card-body text-center">
                                <h5 class="card-title fw-bold">Bagi Adil Kelompok</h5>
                                <p class="card-text">fitur utama BAGIL yaitu generator pembagian kelompok secara adil berdasarkan kemampuan masing-masing individu</p>
                            </div>
                        </div>
                        <div class="card card-home">
                            <div class="d-flex justify-content-center">
                                <img src="https://cdn.iconscout.com/icon/free/png-512/free-add-user-2653743-2202555.png?f=avif&w=256" class="card-img-top img-icon" alt="icon"/>
                            </div>
                            <div class="card-body text-center">
                                <h5 class="card-title fw-bold">Join Kelompok</h5>
                                <p class="card-text">fitur BAGIL untuk mengukur kemampuanmu sebelum pembagian kelompok dilakukan</p>
                            </div>
                        </div>
                        <div class="card card-home">
                            <div class="d-flex justify-content-center">
                                <img src="https://cdn.iconscout.com/icon/free/png-512/free-shuffle-1913201-1619535.png?f=avif&w=256" class="card-img-top img-icon" alt="icon"/>
                            </div>
                            <div class="card-body text-center">
                                <h5 class="card-title fw-bold">Atur Acak</h5>
                                <p class="card-text">Fitur tambahan BAGIL, generator kelompok dengan instan dan mudah</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="my-5 px-5 d-flex justify-content-center">
                    <div class="form-group row w-50">
                    <h1 class="text-center">FAQ</h1>
                    <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Apa itu Bagil?
                                </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>Bagil adalah sebuah situs web yang dirancang untuk membantu dalam pembagian kelompok secara adil.</strong> Kami menggunakan algoritma cerdas yang mempertimbangkan berbagai faktor untuk memastikan kelompok yang seimbang dan adil.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Bagaimana Bagil bekerja?
                                </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>TBagil menggunakan algoritma</strong> yang mempertimbangkan preferensi, keterampilan, dan kecocokan anggota kelompok. Anda dapat memasukkan kriteria dan preferensi tertentu, dan Bagil akan menghasilkan pembagian kelompok yang optimal berdasarkan informasi tersebut.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Apa manfaat menggunakan Bagil?
                                </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>Dengan menggunakan Bagil,</strong> Anda dapat memastikan bahwa pembagian kelompok dilakukan dengan adil dan seimbang. Ini mengurangi konflik dan ketidakpuasan dalam kelompok, meningkatkan kolaborasi, dan memberikan kesempatan yang setara bagi setiap anggota kelompok.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Apakah Bagil dapat menyesuaikan jumlah anggota kelompok?
                                </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>Ya, Bagil dapat menyesuaikan jumlah anggota kelompok</strong> sesuai dengan kebutuhan Anda. Anda dapat menentukan jumlah kelompok yang diinginkan, dan Bagil akan membagi anggota dengan proporsi yang sesuai.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Bagaimana Bagil mempertimbangkan preferensi individual?
                                </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>DBagil memungkinkan setiap anggota kelompok memasukkan preferensi atau keinginan khusus.</strong> Misalnya, jika ada anggota yang ingin bekerja dengan teman-teman tertentu, Bagil akan mencoba memenuhi preferensi tersebut sejauh mungkin dalam pembagian kelompok.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Apakah Bagil dapat digunakan untuk berbagai jenis proyek atau kegiatan?
                                </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>Ya, Bagil dapat digunakan untuk berbagai jenis proyek atau kegiatan,</strong> baik itu dalam lingkungan pendidikan, bisnis, atau kelompok sosial. Anda dapat mengadaptasikan Bagil untuk memenuhi kebutuhan dan preferensi khusus dari setiap proyek atau kegiatan.
                                </div>
                                </div>
                            </div>
                    </div>
                    </div>
                </section>
                <section class="my-5">
                    <h1 class="text-center">KENALAN DENGAN TIM BAGIL</h1>
                    <div class="d-flex justify-content-evenly flex-wrap">
                        <div class="card card-home">
                            <div class="d-flex justify-content-center">
                                <img src="https://media.licdn.com/dms/image/C4D03AQHAOe2qBCHiNg/profile-displayphoto-shrink_800_800/0/1655034710757?e=2147483647&v=beta&t=Act17qPbjk6KDQuUTT_wQxYwWq3KjHkGPQ4oy4dT-s0" class="card-img-top" alt="icon"/>
                            </div>
                            <div class="card-body text-center">
                                <h5 class="card-title fw-bold">Ahmad Wahyu Pratama</h5>
                                <p class="card-text text-center">Front End Developer</p>
                            </div>
                        </div>
                        <div class="card card-home">
                            <div class="d-flex justify-content-center">
                                <img src="https://media.licdn.com/dms/image/C5603AQGy8TOIvRHYeg/profile-displayphoto-shrink_800_800/0/1648432130847?e=2147483647&v=beta&t=e89Iiaj0RSospDZORwRQ65lwUsQnz8_oal766yWUiaE" class="card-img-top" alt="icon"/>
                            </div>
                            <div class="card-body text-center">
                                <h5 class="card-title fw-bold">Dalih Nurdiansah</h5>
                                <p class="card-text text-center">Front End Developer</p>
                            </div>
                        </div>
                        <div class="card card-home">
                            <div class="d-flex justify-content-center">
                                <img src="https://media.licdn.com/dms/image/D5603AQFn_1bJVWpKiQ/profile-displayphoto-shrink_800_800/0/1672556880682?e=2147483647&v=beta&t=B1JcR8DL8vu8BQOgCXvaMvgnzOHvpgbtyvFeCd5fW_g" class="card-img-top" alt="icon"/>
                            </div>
                            <div class="card-body text-center">
                                <h5 class="card-title fw-bold">Irfan Soleh</h5>
                                <p class="card-text text-center">Back End Developer</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <footer class="bg-dark text-light">
                <div class="container-fluid py-4">
                    <div class="row text-center">
                    <div class="col-md-4">
                        <h3 class="mb-3 text-center">Logo</h3>
                        <div className="d-flex justify-content-center">
                            <img src={require("../Assets/badil-logo.png")} alt="Logo" class="footer-logo" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <h3 class="mb-3">Tautan</h3>
                        <ul class="list-unstyled">
                        <li class="nav-item"><Link class="nav-link" to="/">Home</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/dashboard">Atur Adil</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/aturacak">Atur Acak</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h3 class="mb-3">Anggota Kelompok</h3>
                        <ul class="list-unstyled">
                        <li class="nav-item">Ahmad Wahyu Pratama</li>
                        <li class="nav-item">Irfan Soleh</li>
                        <li class="nav-item">Dalih Nurdiansyah</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="text-center py-2 bg-secondary">
                    <p class="mb-0 text-center">Hak Cipta © 2023 BAGIL GROUP RPL. Semua Hak Dilindungi.</p>
                </div>
            </footer>

        </main>
    )
}

export default Home;