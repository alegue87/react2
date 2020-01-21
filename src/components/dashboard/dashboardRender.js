import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
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
        height: 310,
    },
}));

export default function DashboardRender({ data, year, month }) { // destruttura da props
    const classes = useStyles();
    
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
                    year={year}
                    month={month}
                />

            ))
        })
    }

    return (
        <div style={{width:"100%"}}> {/* Per forzare l'estenzione della pagina */}
            <CssBaseline />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}
                    style={{
                        marginLeft:"0px", marginRight:"0px", float:"right",
                        paddingLeft: "0px", paddingRight: "0px"
                    }}
                >

                    {pairs}

                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}