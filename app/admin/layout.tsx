"use client";
import Footer from "../components/footer";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import UserProvider from '../context';
import { useEffect, useState } from 'react';
import styles from './AdminLayout.module.css';
export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <UserProvider>
            <div className="wrapper">
                <Header />
                <Sidebar />
                <div className={`content-wrapper ${styles.padding10}`}>
                    <section className="content pt-3">
                        <div className={`container-fluid shadow ${styles.minHeight}`}>
                            {children}
                        </div>
                    </section>
                </div>
                <Footer />
                <aside className="control-sidebar control-sidebar-dark">
                    {/* Control sidebar content goes here */}
                </aside>
            </div>
        </UserProvider>
    );
}
