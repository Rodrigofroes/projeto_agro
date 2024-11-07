import UserProvider from "../context";

export default function RootLogin({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    );
}