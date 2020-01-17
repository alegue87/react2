import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../title';

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export default function Deposits({history, pairName}) {
    var dt = new Date();
    var date = dt.getMonth()+1 + '/' + dt.getFullYear();
    var last = history[history.length-1]
    last.balance = Math.floor(last.balance)
    var first = history[0];
    var gain = Math.floor(last.balance - first.balance);

    var showGain = ''
    if(gain>0){
        showGain = '+'+gain+' €'
    }
    else{
        showGain = gain+' €'
    }
    const classes = useStyles();
    const linkToHistory = '/history/'+pairName
    return (
        <React.Fragment>
            <Title>Balance</Title>
            <Typography component="p" variant="h4">
                € {last.balance}
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                    Periodo: {date}
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                    Guadagno/perdita: {showGain}
            </Typography>
            <div>
                <Link color="primary" href={linkToHistory}>
                    Guarda storico
                </Link>
            </div>
        </React.Fragment>
    );
}