import React, { useEffect, useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (localStorage.getItem('userLogged')) {
            let person = localStorage.getItem('userLogged');
            person = JSON.parse(person);
            setUser(person);
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => React.useContext(AuthContext);