import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    return (
        <div>
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="/" className="brand-link">
                <h2 className="brand-text font-weight-heavy">Simulasi IaC</h2>
            </a>
            {/* Sidebar */}
            <div className="sidebar">    
                {/* Sidebar Menu */}
                <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    {/* Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library */}
                    <li className="nav-item">
                        <Link to="/" className="nav-link"><i class="nav-icon fas fa-home"></i><p>Home</p></Link>
                    </li>
                </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
            </aside>

        </div>
    )
}
