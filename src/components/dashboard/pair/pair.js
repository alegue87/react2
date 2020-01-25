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
        this.year = this.props.year;
        this.month = this.props.month;
    }
    render(){
        var displayChart = "",
            displayDeposit = ""
        if(this.history.length == 0){
            displayChart = (
                <div>Nessun dato per {this.pairName}</div>
            )
            displayDeposit = (
                <div></div>
            )
        }
        else{
            displayChart = <Chart args={{history:this.history, pairName:this.pairName}}/>
            displayDeposit = <Deposits 
                history={this.history} 
                pairName={this.pairName}
                year={this.year}
                month={this.month}
            />
        }
        return(
            <Grid container spacing={1}>
                {/* Chart */}
                <Grid item xs={12} md={12} lg={9} style={{paddingLeft:'5px'}}>
                    <Paper className={this.fixedHeightPaper} style={{overflow:'hidden'}}>
                        {displayChart} 
                    </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={12} lg={3}>
                    <Paper className={this.fixedHeightPaper}>
                        {displayDeposit}
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