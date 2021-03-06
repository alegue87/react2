import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';


export default class MainTemplate extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}