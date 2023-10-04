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
/*
export const SignInButton = () => {
    const { instance } = useMsal();

    return (
        <Button variant="secondary" className="ml-auto" onClick={() => handleLogin(instance)}>Sign in using Redirect</Button>
    );
} */
import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import LockOpenIcon from '@mui/icons-material/LockOpen';
/*
const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    },
    button: {
        marginTop: 20,
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
        <Container className={classes.root}>
            <Box>
                <Typography variant="h4" gutterBottom>
                    Welcome! Please Sign In
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<LockOpenIcon />}
                    onClick={() => handleLogin(instance)}
                >
                    Sign in using Redirect
                </Button>
            </Box>
        </Container>
    );
} */

//import React from "react";
//import { useMsal } from "@azure/msal-react";
//import { loginRequest } from "../authConfig";
//import Button from '@mui/material/Button';
//import Typography from '@mui/material/Typography';
//import Container from '@mui/material/Container';
//import Box from '@mui/material/Box';
//import { makeStyles } from '@mui/styles';
/import LockOpenIcon from '@mui/icons-material/LockOpen';
import Grid from "@material-ui/core/Grid";
//import React from "react";

import AdminAppBar from "../components/AdminAppBar";
import AdminToolbar from "../components/AdminToolbar";
import RecentNotifications from "../components/RecentNotifications";
import AchievementWidget from "../widgets/AchievementWidget";
import FollowersWidget from "../widgets/FollowersWidget";
import MeetingWidgets from "../widgets/MeetingWidgets";
import PersonalTargetsWidget from "../widgets/PersonalTargetsWidget";
import ViewsWidget from "../widgets/ViewsWidget";
import WelcomeWidget from "../widgets/WelcomeWidget";



    return (
        <Container className={classes.root}>
            <Box>
                <Typography variant="h4" gutterBottom>
                    Welcome! Please Sign In
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<LockOpenIcon />}
                    onClick={() => handleLogin(instance)}
                >
                    Sign in using Redirect
                </Button>
            </Box>
        </Container>
    );
    const Home = () => {
        return (
            <React.Fragment>
                <AdminAppBar>
                    <AdminToolbar>
                        <RecentNotifications />
                    </AdminToolbar>
                </AdminAppBar>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={4}>
                        <WelcomeWidget />
                        <AchievementWidget />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <FollowersWidget />
                        <ViewsWidget />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <PersonalTargetsWidget />
                        <MeetingWidgets />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    };
    export const SignInButton = () => {
        const classes = useStyles();
        const { instance } = useMsal();
    export default Home;