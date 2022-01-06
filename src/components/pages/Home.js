import React from 'react'
import { MainLayout } from '../Layouts/MainLayout'
import { Link } from 'react-router-dom'

export const Home = () => {
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
                        <h1>Home</h1>
                        </div>
                    </div>
                    </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}
                <div className="content">
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            {/* small card */}
                            <div className="small-box bg-info">
                            <div className="inner">
                                <h3>Upload Script</h3>
                                <p>Upload script untuk membangun infrastruktur</p>
                            </div>
                            <div className="icon">
                                <i className="fas fa-file-upload" />
                            </div>
                                <Link to="/upload-script" className="small-box-footer">Mulai <i className="fas fa-arrow-circle-right" /></Link>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small card */}
                            <div className="small-box bg-success">
                            <div className="inner">
                                <h3>Stack</h3>
                                <p>Daftar stack hasil upload script</p>
                            </div>
                            <div className="icon">
                                <i className="fas fa-layer-group" />
                            </div>
                                <Link to="/stack" className="small-box-footer">Lihat Stack <i className="fas fa-arrow-circle-right" /></Link>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small card */}
                            <div className="small-box bg-warning">
                            <div className="inner">
                                <h3>Server</h3>
                                <p>Detail EC2 Instance</p>
                            </div>
                            <div className="icon">
                                <i className="fas fa-server" />
                            </div>
                            <Link to="/server" className="small-box-footer">Lihat server <i className="fas fa-arrow-circle-right" /></Link>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small card */}
                            <div className="small-box bg-secondary">
                            <div className="inner">
                                <h3>Load Balancer</h3>
                                <p>Detail Load Balancer</p>
                            </div>
                            <div className="icon">
                                <i class="fas fa-list"/>
                            </div>
                            <Link to="/loadbalancer" className="small-box-footer">Lihat Load Balancer <i className="fas fa-arrow-circle-right" /></Link>
                            </div>
                        </div>
                        {/* ./col */}
                    </div>
                    {/* /.row */}
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            {/* small card */}
                            <div className="small-box bg-orange">
                            <div className="inner">
                                <h3>Auto Scaling Group</h3>
                                <p>Detail Auto Scaling Group</p>
                            </div>
                            <div className="icon">
                                <i className="fas fa-list" />
                            </div>
                                <Link to="/autoscalinggroups" className="small-box-footer">Lihat Auto Scaling Group <i className="fas fa-arrow-circle-right" /></Link>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small card */}
                            <div className="small-box bg-light">
                            <div className="inner">
                                <h3>Tutorial</h3>
                                <p>Tutorial menggunakan Simulasi IaC</p>
                            </div>
                            <div className="icon">
                                <i class="fas fa-file-alt"/>
                            </div>
                            <Link to="/tutorial" className="small-box-footer">Lihat tutorial <i className="fas fa-arrow-circle-right" /></Link>
                            </div>
                        </div>
                        {/* ./col */}
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

