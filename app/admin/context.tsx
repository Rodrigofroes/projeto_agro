'use client'
import { createContext, useState } from 'react'

const Context = createContext({});

export default function UserProvider({ children, }: { children: React.ReactNode }) {
    const [user, setUser] = useState({});

    return (
        <div>
            <Context.Provider value={{ setUser, user }}>
                {children}
            </Context.Provider>
        </div>
    );
}