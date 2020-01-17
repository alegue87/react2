import React from 'react';
import Image from './../../images/bull-vs-bear.jpg'

export default class Home extends React.Component{

    render(){
        return(
            <div style={{backgroundImage: `URL(${Image})`, height:'796px', width:'1134px', margin:'auto'}}>
                <div className="row">
                    <div className="col-5"></div>
                    <div className="col-2" style={{textAlign:"center"}}>ForeX Diary</div>
                    <div className="col-5"></div>
                </div>
            </div>
        )
    }
}