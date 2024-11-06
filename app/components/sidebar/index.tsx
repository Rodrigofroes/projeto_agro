"use client";
import Link from "next/link";
import ButtonLink from "../buttonlink";
import UsuarioService from "@/app/service/usuario.service";
import { useRouter } from "next/navigation";

export default function Sidebar() {
    const router = useRouter();

    async function logout() {
        try {
            let user = new UsuarioService();
            await user.logout();
            router.push("/auth/login");
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex align-items-center justify-content-around">
                    <div className="rounded-circle bg-white d-flex justify-content-center align-items-center" style={{ width: "35px", height: "35px" }}>
                        <i className="fa fa-user"></i>
                    </div>
                    <div className="info">
                        <span className="d-block text-white">Rodrigo Oliveira</span>
                    </div>
                    <div>
                        <ButtonLink text="Sair" senha={logout} />
                    </div>
                </div>
                {/* Navegação */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-header">INICIO</li>
                        <li className="nav-item menu-open">
                            <Link href="/admin" className="nav-link">
                                <i className="fa fa-home nav-icon"></i>
                                <p>Home</p>
                            </Link>
                        </li>
                        <li className="nav-item">
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
                            <Link href="/admin/cadastro/talhao" className="nav-link">
                                <i className="nav-icon fa fa-map-pin"></i>
                                <p>Talhão</p>
                            </Link>
                        </li>
                        <li className="nav-header">CONFIGURAÇÃO</li>
                        <li className="nav-item">
                            <Link href="/admin/configuracao/usuario" className="nav-link">
                                <i className="nav-icon fa fa-user"></i>
                                <p>Usuário</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}
