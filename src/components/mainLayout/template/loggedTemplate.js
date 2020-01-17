import React from 'react';
import LeftDrawer from '../leftDrawer/leftDrawer';
import TopAppBar from '../topAppBar/topAppBar';

export default class LoggedTemplate extends React.Component{

    render(){
        return(
            <div style={{display:"flex"}}>
                <TopAppBar/>
                <LeftDrawer/>
                {this.props.children}
            </div>
        )
    }
}