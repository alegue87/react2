import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Chart from './chart';
import Deposits from './deposits';
import Orders from './orders';

export default class Pair extends React.Component{
    constructor(props){
        super(props);
        this.fixedHeightPaper = this.props.fixedHeightPaper;
        this.classPaper = this.props.classPaper;
    }
    render(){
        return(
            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                    <Paper className={this.fixedHeightPaper}>
                        <Chart />
                    </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper className={this.fixedHeightPaper}>
                        <Deposits />
                    </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                    <Paper className={this.classPaper}>
                        <Orders />
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}