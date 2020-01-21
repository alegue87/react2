import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Chart from './chart';
import Deposits from './deposits';
//import Orders from './orders';

export default class Pair extends React.Component{
    constructor(props){
        super(props);
        this.fixedHeightPaper = this.props.fixedHeightPaper;
        this.classPaper = this.props.classPaper;
        this.pairName = this.props.pairName;
        this.history = this.props.history;
    }
    render(){
        return(
            <Grid container spacing={1}>
                {/* Chart */}
                <Grid item xs={12} md={12} lg={9}>
                    <Paper className={this.fixedHeightPaper} >
                        <Chart args={{history:this.history, pairName:this.pairName}}/>
                    </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={12} lg={3}>
                    <Paper className={this.fixedHeightPaper}>
                        <Deposits history={this.history} pairName={this.pairName}/>
                    </Paper>
                </Grid>
                {/* Recent Orders */}
                {/*<Grid item xs={12}>
                    <Paper className={this.classPaper}>
                        <Orders />
                    </Paper>
                </Grid>*/}
            </Grid>
        )
    }
}