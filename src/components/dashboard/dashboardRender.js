import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Pair from './pair/pair';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}



const useStyles = makeStyles(theme => ({
    main: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 300,
    },
}));

export default function DashboardRender({ data }) { // destruttura da props
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    var pairs = [];
    if (data != undefined) {
        data.forEach((pair) => {
            var pairName = Object.keys(pair)
            pairs.push((
                <Pair
                    fixedHeightPaper={fixedHeightPaper}
                    classPaper={classes.paper}
                    pairName={pairName}
                    history={pair[pairName]}
                    key={pairName}
                />

            ))
        })
    }

    return (
        <div style={{width:"100%"}}> {/* Per forzare l'estenzione della pagina */}
            <CssBaseline />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>

                    {pairs}

                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}