import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

function handleLogin(instance) {
    instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will redirect the page to the login prompt
 */
/* export const SignInButton = () => {
    const { instance } = useMsal();

    return (
        <Button variant="secondary" className="ml-auto" onClick={() => handleLogin(instance)}>Sign in using Redirect</Button>
    );
} */ 
// CSS in JS styling
const buttonStyle = {
    backgroundColor: '#6200ea',
    borderColor: '#6200ea',
    color: '#ffffff',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px',
    transition: 'background-color 0.3s',
    cursor: 'pointer',
    ':hover': {
        backgroundColor: '#3700b3',
    }
};

export const SignInButton = () => {
    const { instance } = useMsal();

    return (
        <button style={buttonStyle} onClick={() => handleLogin(instance)}>Sign in using Redirect</button>
    );
}
