"use client";
import { createContext, useEffect, useState } from 'react';
import { User, UserContextType } from './types/type';

export const UseContext = createContext<UserContextType | undefined>(undefined);

export default function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UseContext.Provider value={{ user, setUser }}>
            {children}
        </UseContext.Provider>
    );
}
