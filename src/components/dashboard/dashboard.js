import React from 'react';
import DashRender from './dashboardRender';
import DashboardService from './dashboardService';
import Cookie from 'universal-cookie';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

export default class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: [],
            year: new Date().getFullYear(),
            month: new Date().getMonth()+1
        }
        this.initDashboard.bind(this)()
    }
    initDashboard(){
        this.setState({data:[]})
        const cookie = new Cookie();
        const token = cookie.get('token');
        const username = cookie.get('username');
        const dashboardService = new DashboardService();
        dashboardService.getDashboard(
            token, 
            username, 
            this.state.year, 
            this.state.month,
            this.onSuccess.bind(this), 
            this.onError.bind(this)
        );     
    }
    onSuccess(data){
        if(data.authenticated){
           this.setState({data:data.info}) 
        }
        else{
            window.location.href = '/login'
        }
        
    }
    onError(error){
        console.log(error)
    }
    selectChange(name, event){
        this.setState({
           [name]:event.target.value 
        }) 
    }
    render(){
        var years = [ 
            {value:2020, label:'2020'},
            {value:2021, label:'2021'},
            {value:2022, label:'2022'},
            {value:2023, label:'2023'}
        ]
        var months = [
            {value:1, label:'Gennaio'},
            {value:2, label:'Febbraio'},
            {value:3, label:'Marzo'},
            {value:4, label:'Aprile'},
            {value:5, label:'Maggio'},
            {value:6, label:'Giugno'},
            {value:7, label:'Luglio'},
            {value:8, label:'Agosto'},
            {value:9, label:'Settembre'},
            {value:10, label:'Ottobre'},
            {value:11, label:'Novembre'},
            {value:12, label:'Dicembre'}
        ]
        return(
            <Grid container spacing={1}>
                <Grid item xs={12} md={12} lg={2} style={{marginTop:"96px", paddingLeft:"50px", flex:"none"}}>
                    <Paper>
                        <TextField
                        id="select_year"
                        select
                        value={this.state.year}
                        helperText="Anno"
                        onChange={this.selectChange.bind(this, "year")}
                        style={{width:"100%", padding:"5px"}}
                        >
                            {years.map( year => (
                                <MenuItem key={year.value} value={year.value}>
                                    {year.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                        id="select_month"
                        select
                        value={this.state.month}
                        helperText="Mese"
                        style={{width:"100%", padding:"5px"}}
                        onChange={this.selectChange.bind(this, "month")}
                        >
                            {months.map( month => (
                                <MenuItem key={month.value} value={month.value}>
                                    {month.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Button variant="contained" color="primary"
                            onClick={this.initDashboard.bind(this)}
                            style={{margin:'5px'}}
                        >
                            Applica
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12} lg={10}>
                    <DashRender 
                        data={this.state.data}
                        year={this.state.year}
                        month={this.state.month}/>  
                </Grid>  
            </Grid>
           
        )
    }
}