import React from 'react';

export default class Home extends React.Component{

    render(){
        return(
            <div style={{backgroundColor:"white"}}>
                <div className="row">
                    <div className="col-5"></div>
                    <div className="col-2" style={{textAlign:"center"}}>ForeX Diary</div>
                    <div className="col-5"></div>
                </div>
            </div>
        )
    }
}