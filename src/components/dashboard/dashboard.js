import React from 'react';
import DashRender from './dashboardRender';
import DashboardService from './dashboardService';
import Cookie from 'universal-cookie';

export default class Dashboard extends React.Component{
    constructor(props){
        super(props);
        const cookie = new Cookie();
        const token = cookie.get('token');
        const username = cookie.get('username');
        const dashboardService = new DashboardService();
        this.data = []
        dashboardService.getDashboard(token, username,
            this.onSuccess.bind(this), 
            this.onError.bind(this)
        );
    }
    onSuccess(data){
        this.data = data
        this.setState({dataRetrived:true})
    }
    onError(error){
        console.log(error)
    }
    render(){
        return(
           <DashRender data={this.data}/>
        )
    }
}