import React from 'react'
import { MainLayout } from '../Layouts/MainLayout'
import { Link } from 'react-router-dom'

export const Tutorial = () => {
    return (
        <div>
            <MainLayout>
                {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Tutorial</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Tutorial</li>
                            </ol>
                        </div>
                    </div>
                    </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}
                <div className="content">
                    <div className="row">
                        <div className="col-12">
                            {/* Custom Tabs */}
                            <div className="card">
                                <div className="card-header d-flex p-0">
                                    <h3 className="card-title p-3">Detail Menu</h3>
                                    <ul className="nav nav-pills ml-auto p-2">
                                        <li className="nav-item"><a className="nav-link active" href="#tab_1a" data-toggle="tab">Upload Script</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#tab_2a" data-toggle="tab">Stack</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#tab_3a" data-toggle="tab">Server</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#tab_4a" data-toggle="tab">Load Balancer</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#tab_5a" data-toggle="tab">Auto Scaling Group</a></li>
                                    </ul>
                                </div>{/* /.card-header */}
                                <div className="card-body">
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="tab_1a">
                                            <p className="card-text">
                                            Menu <b>Upload Script</b> merupakan menu dimana user dapat mengunggah script yang sudah dibuat
                                            untuk membangun infrastruktur jaringan server. Resource dari script tersebut dapat dilihat
                                            pada menu <b>Stack</b>, <b>Server</b>, <b>Load Balancer</b>, dan <b>Auto Scaling Group</b>. 
                                            Sebelum membuat script direkomendasikan untuk terlebih dahulu mempelajari <a href="https://aws.amazon.com/cloudformation/" target="_blank" 
                                            class="link-info">AWS CloudFormation</a>
                                            </p>
                                            Langkah-langkahnya adalah sebagai berikut:
                                            <ol>
                                                <li>
                                                    Pertama membuat script untuk membangun infrastruktur jaringan server yang diinginkan. 
                                                    Untuk referensi konfigurasi pada script dapat anda lihat pada 
                                                    <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html" 
                                                    target="_blank" class="link-info"> AWS CloudFormation User Guide</a>
                                                </li>
                                                <li>
                                                    Akses aplikasi <b>Simulasi IaC</b>, kemudian buka menu <b>Upload Script</b>.
                                                </li>
                                                <li>
                                                    Pada Form Upload Script masukkan <b>Nama Stack</b>, kemudian pilih <b>File Script</b> yang sudah dibuat.
                                                </li>
                                                <li>
                                                    Jika infrastruktur yang dibangun menggunakan beberapa stack yang mereferensikan output resource stack lain, 
                                                    pastikan <b>Nama Stack</b> sudah sesuai dengan parameter <b>Nama Stack</b> lain pada script yang sedang dibangun. Untuk lebih
                                                    jelasnya dapat dipelajari pada <a href="https://docs.aws.amazon.com/id_id/AWSCloudFormation/latest/UserGuide/walkthrough-crossstackref.html" 
                                                    target="_blank" class="link-info"> Walkthrough</a> berikut.
                                                </li>
                                                <li>
                                                    Untuk <b>File Script</b> yang diunggah pastikan formatnya <b>JSON</b> atau <b>YAML</b>.
                                                </li>
                                                <li>
                                                    Jika <b>Nama Stack</b> dan <b>File Script</b> sudah ditentukan, pilih tombol <b>Upload</b>.
                                                </li>
                                            </ol>
                                        </div>
                                        {/* /.tab-pane */}
                                        <div className="tab-pane" id="tab_2a">
                                            <p className="card-text">
                                            Menu <b>Stack</b> merupakan menu dimana user dapat melihat daftar stack hasil dari unggahan script.<b> Stack</b> merupakan sebuah unit satuan
                                            yang berfungsi untuk mengelola resource yang dibangun dari unggahan script.
                                            </p>
                                            Pada menu <b>Stack</b>, user dapat melakukan hal berikut: 
                                            <ol>
                                                <li>
                                                    Untuk melihat detail dari stack yang sudah dibangun, pilih tombol <b>Details</b>, maka akan muncul halaman baru yang menampilkan detail stack
                                                    seperti <b>Overview</b>, <b>Events</b>, <b>Resources</b>, dan <b>Template</b>.
                                                    <ul>
                                                        <li><b>Overview </b> merupakan ringkasan detail mengenai stack seperti ID, nama, deskripsi, waktu pembuatan, dan status stack.</li>
                                                        <li><b>Events </b> merupakan riwayat proses pembuatan stack, dimulai dari script diunggah hingga semua resource selesai dibangun.</li>
                                                        <li><b>Resources </b> merupakan daftar resource yang dibangun berdasarkan konfigurasi pada script yang diunggah.</li>
                                                        <li><b>Template </b> merupakan isi dari script yang diunggah.</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    Untuk memperbaharui konfigurasi resource yang sudah dibangun, 
                                                    pilih tombol <b>Update</b> kemudian masukkan <b>Nama Stack</b> dan <b>File Script</b> yang baru, 
                                                    kemudian pilih tombol <b>Update</b>. Maka stack akan diperbaharui sesuai konfigurasi pada file script baru yang sudah diunggah.
                                                </li>
                                                <li>
                                                    Untuk menghapus sebuah stack, pilih tombol <b>Delete</b>. Kemudian akan muncul alert yang menanyakan konfirmasi kegiatan user, jika dipilih 
                                                    <b> OK</b> maka stack akan mulai dihapus.
                                                </li>
                                            </ol>
                                        </div>
                                        {/* /.tab-pane */}
                                        <div className="tab-pane" id="tab_3a">
                                            <p className="card-text">
                                                Menu <b>Server </b> merupakan menu dimana user dapat melihat daftar server (EC2 Instance) yang dibangun berdasarkan script yang diunggah. Setiap Server
                                                 yang terdaftar dapat dilihat detailnya melalui tombol <b>Details</b>. Jika tombol tersebut diklik maka akan muncul halaman yang memberikan detail terkait
                                                 server yang dipilih, seperti AMI ID, Instannce ID, Instance Type, dan lain-lain.
                                            </p>                                    
                                        </div>
                                        {/* /.tab-pane */}
                                        <div className="tab-pane" id="tab_4a">
                                            <p className="card-text">
                                                Menu <b>Load Balancer </b> merupakan menu dimana user dapat melihat daftar Load Balancer yang dibangun berdasarkan script yang diunggah. Pada daftar ini 
                                                terdapat beberapa detail seperti nama Load Balancer, DNS Load Balancer, status, dan lain-lain. Pada <b>DNS Name </b> merupakan DNS dari Load Balancer yang dapat digunakan
                                                untuk mengakses aplikasi pada server yang sudah terdaftar pada Load Balancer.
                                            </p>                                    
                                        </div>
                                        {/* /.tab-pane */}
                                        <div className="tab-pane" id="tab_5a">
                                            <p className="card-text">
                                                Menu <b>Auto Scaling Group </b> merupakan menu dimana user dapat melihat daftar Auto Scaling Group yang dibangun berdasarkan script yang diunggah. Setiap 
                                                Auto Scaling Group yang terdaftar dapat dilihat detailnya melalui tombol <b>Details</b>. Jika tombol tersebut diklik maka akan muncul halaman yang 
                                                memberikan detail terkait Auto Scaling Group yang dipilih seperti <b>Overview </b> dan <b>Activity</b>.
                                            </p>       
                                            <ul>
                                                <li>
                                                    <b>Overview </b> merupakan ringkasan detail mengenai Auto Scaling Group seperti Amazon Resource Name (ARN), kapasitas yang diinginkan, 
                                                    kapasitas minimum, kapasitas maksimum, dan waktu pembuatan Auto Scaling Group.
                                                </li>
                                                <li>
                                                    <b>Activity </b> merupakan riwayat aktifitas Auto Scaling, disini dapat dilihat kegiatan yang berhubungan dengan Auto Scaling
                                                </li>
                                            </ul>                             
                                        </div>
                                        {/* /.tab-pane */}
                                    </div>
                                    {/* /.tab-content */}
                                </div>{/* /.card-body */}
                            </div>
                            {/* ./card */}
                        </div>
                        {/* /.col */}
                    </div>
                    {/* /.row */}
                    <div className="row">
                        <div className="col-12">
                            {/* Custom Tabs */}
                            <div className="card">
                                <div className="card-header d-flex p-0">
                                    <h3 className="card-title p-3">Desain Infrastruktur Jaringan Server</h3>
                                    <ul className="nav nav-pills ml-auto p-2">
                                        <li className="nav-item"><a className="nav-link active" href="#tab_1b" data-toggle="tab">Diagram Full</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#tab_2b" data-toggle="tab">Skenario 1</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#tab_3b" data-toggle="tab">Skenario 2</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#tab_4b" data-toggle="tab">Skenario 3</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#tab_5b" data-toggle="tab">Skenario 4</a></li>
                                    </ul>
                                </div>{/* /.card-header */}
                                <div className="card-body">
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="tab_1b">
                                        <p className="card-text">Berikut adalah desain lengkap infrastruktur jaringan server yang digunakan untuk Proyek Akhir:</p>
                                        <br/>
                                        <img src="./images/Diagram-Infrastruktur.png" class="rounded mx-auto d-block" alt="Diagram Infrastruktur Jaringan Server Full" />
                                        </div>
                                        {/* /.tab-pane */}
                                        <div className="tab-pane" id="tab_2b">
                                            <p className="card-text">
                                                Pada skenario 1, resource infrastruktur yang dibangun pada Availability Zone A (ap-southeast-1a) adalah sebagai berikut:
                                                <ul>
                                                    <li><b>Virtual Private Cloud (VPC)</b></li>
                                                    <li><b>Internet gateway</b></li>
                                                    <li><b>NAT gateway</b></li>
                                                    <li><b>Elastic IP</b></li>
                                                    <li><b>Public subnet</b></li>
                                                    <li><b>Private subnet</b></li>
                                                    <li><b>Route table </b>untuk public subnet</li>
                                                    <li><b>Route table </b>untuk private subnet</li>
                                                    <li><b>Network Access Control List (ACL) </b>untuk public subnet</li>
                                                    <li><b>Network Access Control List (ACL) </b>untuk private subnet</li>
                                                </ul>
                                            </p>
                                            <img src="./images/Diagram-Infrastruktur-1.png" class="rounded mx-auto d-block" alt="Skenario 1" />
                                        </div>
                                        {/* /.tab-pane */}
                                        <div className="tab-pane" id="tab_3b">
                                            <p className="card-text">
                                                Pada skenario 2, resource infrastruktur yang dibangun pada Availability Zone B (ap-southeast-1b) adalah sebagai berikut:
                                                <ul>
                                                    <li><b>NAT gateway</b></li>
                                                    <li><b>Elastic IP</b></li>
                                                    <li><b>Public subnet</b></li>
                                                    <li><b>Private subnet</b></li>
                                                    <li><b>Route table </b>untuk public subnet</li>
                                                    <li><b>Route table </b>untuk private subnet</li>
                                                    <li><b>Network Access Control List (ACL) </b>untuk public subnet</li>
                                                    <li><b>Network Access Control List (ACL) </b>untuk private subnet</li>
                                                </ul>
                                            </p>
                                            <img src="./images/Diagram-Infrastruktur-2.png" class="rounded mx-auto d-block" alt="Skenario 2" />                                  
                                        </div>
                                        {/* /.tab-pane */}
                                        <div className="tab-pane" id="tab_4b">
                                            <p className="card-text">
                                                Pada skenario 3, resource infrastruktur yang dibangun adalah sebagai berikut:
                                                <ul>
                                                    <li><b>Security Group </b>untuk Application Load Balancer dan Auto Scaling Group</li>
                                                    <li><b>Application Load Balancer</b></li>
                                                    <li><b>Launch Configuration</b> sebagai template konfigurasi EC2 instance yang digunakan Auto Scaling Group</li>
                                                    <li><b>Auto Scaling Group</b></li>
                                                </ul>
                                            </p>
                                            <img src="./images/Diagram-Infrastruktur-3.png" class="rounded mx-auto d-block" alt="Skenario 3" />                                  
                                        </div>
                                        {/* /.tab-pane */}
                                        <div className="tab-pane" id="tab_5b">
                                        <p className="card-text">
                                                Pada skenario 3, resource infrastruktur yang dibangun adalah sebagai berikut:
                                                <ul>
                                                    <li><b>AWS Client VPN </b>untuk akses ke server pada private subnet</li>
                                                </ul>
                                            </p>
                                            <img src="./images/Diagram-Infrastruktur-4.png" class="rounded mx-auto d-block" alt="Skenario 3" />                           
                                        </div>
                                        {/* /.tab-pane */}
                                    </div>
                                    {/* /.tab-content */}
                                </div>{/* /.card-body */}
                            </div>
                            {/* ./card */}
                        </div>
                        {/* /.col */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.content */}
            </div>
            {/* /.content-wrapper */}
            </MainLayout>
            
        </div>
    )
}
