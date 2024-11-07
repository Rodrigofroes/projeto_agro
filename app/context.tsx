'use client'
import { createContext, useState } from 'react'

export const UseContext = createContext({});

export default function UserProvider({ children, }: { children: React.ReactNode }) {
    const [user, setUser] = useState({});

    return (
        <div>
            <UseContext.Provider value={{ setUser, user }}>
                {children}
            </UseContext.Provider>
        </div>
    );
}