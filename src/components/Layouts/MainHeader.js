import React from 'react'
import { Link } from 'react-router-dom'

export const MainHeader = () => {
    return (
        <div>
            {/* Navbar */}
            <nav className="main-header navbar navbar-expand navbar-primary navbar-dark">
            {/* Left navbar links */}
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" data-widget="pushmenu" to="#" role="button"><i className="fas fa-bars" /></Link>
                {/* <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a> */}
            </li>
            <li className="nav-item d-none d-sm-inline-block">
                <Link to="/home" className="nav-link">Home</Link>
            </li>
            </ul>

            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">                 
                <li className="nav-item">
                <a className="nav-link" data-widget="fullscreen" role="button">
                    <i className="fas fa-expand-arrows-alt" />
                </a>
                </li>
            </ul>
            </nav>
            {/* /.navbar */}
        </div>
    )
}
