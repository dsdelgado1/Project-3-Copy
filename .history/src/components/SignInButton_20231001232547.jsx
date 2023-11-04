// import React from "react";
// import { useMsal } from "@azure/msal-react";
// import { loginRequest } from "../authConfig";
// import Button from "react-bootstrap/Button";

// function handleLogin(instance) {
//     instance.loginRedirect(loginRequest).catch(e => {
//         console.error(e);
//     });
// }

// /**
//  * Renders a button which, when selected, will redirect the page to the login prompt
//  */
// export const SignInButton = () => {
//     const { instance } = useMsal();

//     return (
//         <Button variant="secondary" className="ml-auto" onClick={() => handleLogin(instance)}>Sign in using Redirect</Button>
//     );
// }

import { useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";

export const SignInButton = () => {
    const { instance } = useMsal();

    useEffect(() => {
        // This function will run as soon as the component is mounted
        const initiateLogin = async () => {
            try {
                await instance.loginRedirect(loginRequest);
            } catch (e) {
                console.error(e);
            }
        };
        initiateLogin();
    }, [instance]);  // Dependency array to ensure this useEffect runs once

    return <Container maxWidth="sm" style={{backgroundImage, height: '100vh', backgroundSize: 'cover'}}>
        </Container>
};