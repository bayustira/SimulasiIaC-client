import React from 'react'
import { Link } from 'react-router-dom'

export const MainSidebar = () => {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="/home" className="brand-link">
                <h2 className="brand-text font-weight-heavy">Simulasi IaC</h2>
            </a>
            <div className="sidebar">    
                <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li className="nav-item">
                        <Link to="/home" className="nav-link"><i class="nav-icon fas fa-home"></i><p>Home</p></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tutorial" className="nav-link"><i class="nav-icon fas fa-file-alt"></i><p>Tutorial</p></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/upload-script" className="nav-link"><i class="nav-icon fas fa-file-upload"></i><p>Upload Script</p></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/stack" className="nav-link"><i class="nav-icon fas fa-layer-group"></i><p>Stack</p></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/server" className="nav-link"><i class="nav-icon fas fa-server"></i><p>Server</p></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/loadbalancer" className="nav-link"><i class="nav-icon fas fa-list"></i><p>Load Balancer</p></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/autoscalinggroups" className="nav-link"><i class="nav-icon fas fa-list"></i><p>Auto Scaling Group</p></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link"><i class="nav-icon fas fa-sign-out-alt"></i><p>Sign Out</p></Link>
                    </li>
                </ul>
                </nav>
            </div>
            </aside>
        </div>
    )
}
