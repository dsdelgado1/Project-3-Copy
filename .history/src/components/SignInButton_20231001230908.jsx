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

// src/components/LoginPage.jsx
import React from "react";
import { Container, Grid, TextField, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        height: '100vh',
    },
    formContainer: {
        padding: '2em',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    graphicContainer: {
        background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1em',
    },
});

const LoginPage = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} className={classes.formContainer}>
                    <Typography variant="h4" gutterBottom>
                        Sign In
                    </Typography>
                    <form className={classes.form}>
                        <TextField label="Email" variant="outlined" fullWidth />
                        <TextField label="Password" variant="outlined" fullWidth type="password" />
                        <Button variant="contained" color="primary">
                            Sign In
                        </Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6} className={classes.graphicContainer}>
                    {/* Place your graphic here */}
                    <img src="/path/to/your/graphic.png" alt="Graphic" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default SignInButton;
