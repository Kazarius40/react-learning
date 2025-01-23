import {useEffect} from "react";
import {login} from "../services/api.service.login.ts";

export const LoginPage = () => {
    useEffect(() => {
        void login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMin: 1,
        });
    }, [])

    return (
        <>
            Login
        </>
    );
};