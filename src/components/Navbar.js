import React from 'react'

export default function Navbar(props) {
    
    return (
        <nav className="navbar navbar-expand navbar-light navbar-bg">
            <a className="sidebar-toggle d-flex">
                <i className="hamburger align-self-center"></i>
            </a>

            <form className="d-none d-sm-inline-block">
                <div className="input-group input-group-navbar">
                    <input type="text" className="form-control" placeholder="Search…" aria-label="Search" />
                    <button className="btn" type="button">
                        <i className="align-middle" data-feather="search"></i>
                    </button>
                </div>
            </form>

            <div className="navbar-collapse collapse">
                <ul className="navbar-nav navbar-align">
                    <li className="nav-item dropdown">
                        <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-toggle="dropdown">
                            <div className="position-relative">
                                <i className="align-middle" data-feather="bell"></i>
                                <span className="indicator">4</span>
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0" aria-labelledby="alertsDropdown">
                            <div className="dropdown-menu-header">
                                4 New Notifications
                            </div>
                            <div className="list-group">
                                <a href="#" className="list-group-item">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-2">
                                            <i className="text-danger" data-feather="alert-circle"></i>
                                        </div>
                                        <div className="col-10">
                                            <div className="text-dark">Update completed</div>
                                            <div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
                                            <div className="text-muted small mt-1">30m ago</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="list-group-item">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-2">
                                            <i className="text-warning" data-feather="bell"></i>
                                        </div>
                                        <div className="col-10">
                                            <div className="text-dark">Lorem ipsum</div>
                                            <div className="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
                                            <div className="text-muted small mt-1">2h ago</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="list-group-item">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-2">
                                            <i className="text-primary" data-feather="home"></i>
                                        </div>
                                        <div className="col-10">
                                            <div className="text-dark">Login from 192.186.1.8</div>
                                            <div className="text-muted small mt-1">5h ago</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="list-group-item">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-2">
                                            <i className="text-success" data-feather="user-plus"></i>
                                        </div>
                                        <div className="col-10">
                                            <div className="text-dark">New connection</div>
                                            <div className="text-muted small mt-1">Christina accepted your request.</div>
                                            <div className="text-muted small mt-1">14h ago</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="dropdown-menu-footer">
                                <a href="#" className="text-muted">Show all notifications</a>
                            </div>
                        </div>
                    </li>
                   
                    <li className="nav-item dropdown">

                        <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-toggle="dropdown">
                            <i className="align-middle" data-feather="settings"></i>
                        </a>

                        <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-toggle="dropdown">
                            <img src="img/photos/user-01.png" className="avatar img-fluid rounded mr-1" alt="user" /> <span className="text-dark">Aladin labidi</span>
                        </a>

                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="/Profile"><i className="align-middle mr-1" data-feather="user"></i> Profile</a>
                          
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/settings"><i className="align-middle mr-1" data-feather="settings"></i> Settings & Privacy</a>
                          
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Log out</a>
                        </div>

                    </li>
                </ul>
            </div>
        </nav>
    )
}
