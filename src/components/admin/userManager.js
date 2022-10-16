import React from 'react'
import './vendor/bootstrap/css/bootstrap.min.css'
import './vendor/fonts/circular-std/style.css'
import './libs/css/style.css'
import './vendor/fonts/fontawesome/css/fontawesome-all.css'
import './vendor/fonts/material-design-iconic-font/css/materialdesignicons.min.css'
function UserManager() {
    return (
        <div className="dashboard-main-wrapper">

            <div className="dashboard-header">
                <nav className="navbar navbar-expand-lg bg-white fixed-top">
                    <a className="navbar-brand" href="../index.html">Admin</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                </nav>
            </div>

            <div className="nav-left-sidebar sidebar-dark">
                <div className="menu-list">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="d-xl-none d-lg-none" href="#">Khách hàng</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav flex-column">
                                <li className="nav-divider">
                                    Menu
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link active" href="useful-template/users.html" data-toggle="collapse"
                                        aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"><i
                                            className="fa fa-fw fa-user-circle"></i>Người dùng<span
                                                className="badge badge-success">6</span></a>

                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="useful-template/roomtypes.html" data-toggle="collapse"
                                        aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"><i
                                            className="fa fa-fw fa-rocket"></i>Quản lý loại phòng<span
                                                className="badge badge-success">6</span></a>

                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="useful-template/bedtypes.html" data-toggle="collapse"
                                        aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"><i
                                            className="fas fa-fw fa-table"></i>Quản lý loại giường<span
                                                className="badge badge-success">6</span></a>

                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="useful-template/services.html" data-toggle="collapse"
                                        aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"><i
                                            className="fab fa-fw fa-wpforms"></i>Quản lý tiện nghi<span
                                                className="badge badge-success">6</span></a>

                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="useful-template/locations.html" data-toggle="collapse"
                                        aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"><i
                                            className="fas fa-fw fa-chart-pie"></i>Quản lý địa điểm<span
                                                className="badge badge-success">6</span></a>

                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="useful-template/icon-fontawesome.html" data-toggle="collapse"
                                        aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"><i
                                            className="fa fa-fw fa-user-circle"></i>Icon<span
                                                className="badge badge-success">6</span></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="dashboard-wrapper">
                <div className="container-fluid dashboard-content">

                    <div className="row">

                    </div>
                    <div className="row">

                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="card">
                                <h5 className="card-header">Danh sách người dùng</h5>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered first">
                                            <thead>
                                                <tr>
                                                    <th>Tên người dùng</th>
                                                    <th>Email</th>
                                                    <th>Căn cước công dân</th>
                                                    <th>Địa chỉ</th>
                                                    <th>Ngày sinh</th>
                                                    <th>Số điện thoại</th>
                                                    <th>Giới tính</th>
                                                    <th>Ngày đăng kí</th>
                                                    <th>Thao tác</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Tiger Nixon</td>
                                                    <td>System Architect</td>
                                                    <td>Edinburgh</td>
                                                    <td>61</td>
                                                    <td>2011/04/25</td>
                                                    <td>$320,800</td>
                                                    <td>2011/04/25</td>
                                                    <td>$320,800</td>
                                                    <td><button className="btn btn-danger">Xóa</button></td>
                                                </tr>

                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default UserManager