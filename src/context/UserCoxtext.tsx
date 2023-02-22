import React, { useState, createContext } from "react";

export type AuthenticatedUser = {
    email: string;
    password: string;
    authenticated: boolean;
};

type UserContextType = {
    user: AuthenticatedUser;
    setUser: React.Dispatch<React.SetStateAction<AuthenticatedUser>>;
};

type UserContextProviderProps = {
    children: React.ReactNode;
};

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthenticatedUser>({
        email: "",
        password: "",
        authenticated: false,
    });
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
