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

import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { Container, Grid, TextField, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        height: '100vh',
        background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)',
    },
    formContainer: {
        padding: '2em',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1em',
    },
});

function handleLogin(instance) {
    instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
    });
}

export const SignInButton = () => {
    const classes = useStyles();
    const { instance } = useMsal();

    return (
        <Container maxWidth="sm" className={classes.root}>
            <Grid container justifyContent="center" alignItems="center" style={{ height: '100%' }}>
                <Grid item xs={12} sm={8} md={6} className={classes.formContainer}>
                    <Typography variant="h4" gutterBottom>
                        Sign In
                    </Typography>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        fullWidth 
                        onClick={() => handleLogin(instance)}>
                        Sign in with Microsoft 365
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};
