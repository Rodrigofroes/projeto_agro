import Footer from "../components/footer";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

export default function AdminLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="wrapper">
            <Header />
            <Sidebar />
            <div className="content-wrapper" style={{ padding: '10px' }}>
                <section className="content pt-3" >
                    <div className="container-fluid">
                        {children}
                    </div>
                </section>
            </div>
            <Footer />
            <aside className="control-sidebar control-sidebar-dark">
                {/* Control sidebar content goes here */}
            </aside>
        </div>
    );
}