"use client";
export default function Footer() {
    let data = new Date();
    return (
        <footer className="main-footer">
            <div className="float-right d-none d-sm-block">
                <b>Version</b> 1.0.0
            </div>
            <strong>Copyright &copy; {data.getFullYear()} <a href="#">Agro coleta</a>.</strong> All rights reserved.
        </footer>
    );
}