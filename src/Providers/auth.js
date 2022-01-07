import React, { useEffect, useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);
    const [progress, setProgress] = useState(null);
    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('userLogged')) {
            let person = localStorage.getItem('userLogged');
            person = JSON.parse(person);
            setUser(person);
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser, progress, setProgress, navbar, setNavbar }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => React.useContext(AuthContext);