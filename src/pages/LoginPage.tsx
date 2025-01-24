import {useEffect} from "react";
import {login} from "../services/api.service.login.ts";

export const LoginPage = () => {
    useEffect(() => {
        const loginData = {
            username: 'emilys',
            password: 'emilyspass',
            expiresInMin: 1,
        }
        void login(loginData);
    }, [])

    return (
        <>
            Login
        </>
    );
};