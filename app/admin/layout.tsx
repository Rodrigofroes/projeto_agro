"use client";
import React, { createContext, useContext, useState } from 'react';
import Footer from "../components/footer";
import Header from "../components/header";
import Sidebar from "../components/sidebar";


const AdminContext = createContext({});

export const useAdminContext = () => useContext(AdminContext);

export default function AdminLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(prev => !prev);
    const [user, setUser] = useState({});

    return (
        <AdminContext.Provider value={{ sidebarOpen, toggleSidebar, user, setUser }}>
            <div className="wrapper">
                <Header />
                {sidebarOpen && <Sidebar />}
                <div className="content-wrapper" style={{ padding: '10px' }}>
                    <section className="content pt-3">
                        <div className="container-fluid shadow" style={{ minHeight: "700px", padding: "15px" }}>
                            {children}
                        </div>
                    </section>
                </div>
                <Footer />
                <aside className="control-sidebar control-sidebar-dark">
                    {/* Control sidebar content goes here */}
                </aside>
            </div>
        </AdminContext.Provider>
    );
}