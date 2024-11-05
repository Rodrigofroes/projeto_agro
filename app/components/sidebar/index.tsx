import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Rodrigo Oliveira</a>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-header">INICIO</li>
                        <li className="nav-item menu-open">
                            <Link href="/admin" className="nav-link">
                                <i className="fa fa-home nav-icon"></i>
                                <p>Home</p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link">
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Dashboard
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link href="/admin" className="nav-link active">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Dashboard v1</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/admin" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Dashboard v2</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/admin" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Dashboard v3</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-header">CADASTRO</li>
                        <li className="nav-item">
                            <Link href="/admin/cadastro" className="nav-link">
                                <i className="nav-icon fa fa-map-pin"></i>
                                <p>Talhão</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}
