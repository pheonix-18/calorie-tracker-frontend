import React from "react";
// import auth provider
// import browser router and route from react-router-dom
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [token, setToken] = React.useState(() => {
        const authenticated = localStorage.getItem('isAuthenticated');
        return authenticated ? true : false;
      });
    const handleLogin = async(email, password) => {
        await fetch('http://localhost:8080/validate/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
        // check the response status and print it in the console
        .then((response) => {
            if (response.status === 200) {
                //set token to true
                localStorage.setItem('isAuthenticated', true);
                setToken(true);
                const token = localStorage.getItem('isAuthenticated')
                console.log("Logging In : token is ", token);
                navigate('/home');
            } else {
                localStorage.setItem('isAuthenticated', false);
                window.alert("Login Failed");
                navigate('/login');
            }
        })
    }
    // handle logout
    const handleLogout = () => {
        localStorage.setItem('isAuthenticated', false);
        setToken(false);
        const token = localStorage.getItem('isAuthenticated')
        console.log("Logging out : token is ", token);
        navigate('/login');
    }


    const value = {
        token,
        handleLogin,
        handleLogout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );

};