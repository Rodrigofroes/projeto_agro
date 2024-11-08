"use client";
import React, { useEffect, useState } from 'react';

export default function Footer() {
    const [year, setYear] = useState<number>(new Date().getFullYear());

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        setYear(currentYear);
    }, []);

    return (
        <footer className="main-footer">
            <div className="float-right d-none d-sm-block">
                <b>Version</b> 1.0.0
            </div>
            <strong>
                Copyright &copy; {year} <a href="#">Agro coleta</a>.
            </strong>{" "}
            All rights reserved.
        </footer>
    );
}
