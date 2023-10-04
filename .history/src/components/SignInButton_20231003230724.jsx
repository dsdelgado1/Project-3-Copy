/* import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import Button from "react-bootstrap/Button";

function handleLogin(instance) {
    instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will redirect the page to the login prompt
 */
// export const SignInButton = () => {
//     const { instance } = useMsal();

//     return (
//         <Button variant="secondary" className="ml-auto" onClick={() => handleLogin(instance)}>Sign in using Redirect</Button>
//     );
// } */

import  { useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { useNavigate } from 'react-router-dom';  // Import useHistory hook

export const SignInButton = () => {
    const { instance } = useMsal();
    const history = useNavigate();  // Get the history object

    useEffect(() => {
        // This function will run as soon as the component is mounted
        const initiateLogin = async () => {
            try {
                await instance.loginRedirect(loginRequest);
                history.push('/');  // Redirect to homepage once login is successful
            } catch (e) {
                console.error(e);
            }
        };
        initiateLogin();
    }, [instance, history]);  // Update the dependency array to include history

    return null;  // Render nothing, as the user will be redirected before seeing anything
};
