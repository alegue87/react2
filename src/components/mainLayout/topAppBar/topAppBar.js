import clsx from 'clsx';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240;
const useStyles = makeStyles( (theme) => ({
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    
    appBar: {
        marginTop: '0px',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    }
}))



export default function TopAppBar({open, handleDrawerOpen}){
    const classes = useStyles();
    
    var pathname = window.location.pathname;
    var splittedPathname = pathname.split('/')
    var basePathname = splittedPathname[1]
    var page
    if(basePathname == 'dashboard'){
        page = 'DASHBOARD'
    }
    else if(basePathname == 'history'){
        page = 'HISTORY ' + splittedPathname[2]
    }
    return(
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    
                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    onClick={handleDrawerOpen}
                >
                    <MenuIcon />
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    FXD - {page}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}