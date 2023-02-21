import { createContext, useState } from "react";

interface IUserData {
    fullName: string;
    email: string;
    id: number;
}

interface IInitialValue {
    token: string;
    setToken: Function;
    user: IUserData | null;
    setUser: Function;
    users: IUserData | any;
    setUsers: Function;
}

let defaultValue: IInitialValue = {
    token: "",
    setToken: (token: string) => {},
    user: null,
    setUser: (user: object) => {},
    users: [],
    setUsers: (users: object) => {},
};

export const UserContext = createContext(defaultValue);

export const UserProvider = ({ children }: any) => {
    const getToken = localStorage.getItem("token") || "";

    const [token, setToken] = useState(getToken);
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);

    return (
        <UserContext.Provider
            value={{
                token,
                setToken,
                user,
                setUser,
                users,
                setUsers,
            }}>
            {children}
        </UserContext.Provider>
    );
};
