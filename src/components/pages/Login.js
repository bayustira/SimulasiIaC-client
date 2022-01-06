import React from 'react'
import { Layout } from '../Layouts/Layout'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <div>
            <Layout>
                {/* Main Sidebar Container */}
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="/" className="brand-link">
                    <h2 className="brand-text font-weight-light">Simulasi IaC</h2>
                </a>
                {/* Sidebar */}
                <div className="sidebar">    
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {/* Add icons to the links using the .nav-icon class
                        with font-awesome or any other icon font library */}
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                    </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
                </aside>

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
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                            <h5 className="m-0">Simulasi Membangun Server Dengan Kode</h5>
                            </div>
                            <div className="card-body">
                            <p className="card-text">Hanya dengan script, anda dapat membangun infrastruktur server sesuai kebutuhan anda</p>
                            {/* <Link to="https://login-iac.auth.ap-southeast-1.amazoncognito.com/login?client_id=4omij3pn3iksj75f8ac14p6la9&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http://localhost:3000/home" className="btn btn-primary">Login</Link> */}
                            <a href="https://login-iac.auth.ap-southeast-1.amazoncognito.com/login?client_id=4omij3pn3iksj75f8ac14p6la9&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://quizzical-brown-5cc36a.netlify.app/home" className="btn btn-primary">Login</a>
                            </div>
                        </div>
                        </div>
                        {/* /.col-md-6 */}
                    </div>
                    {/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content */}
                </div>
                {/* /.content-wrapper */}
            </Layout>
        </div>
    )
}

