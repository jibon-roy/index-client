import { createContext } from "react";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const data = {}
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider >
    )
};

export default AuthProvider;