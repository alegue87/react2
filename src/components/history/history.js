import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
const {BASE_URL} = require('../../config'); 
import Cookie from 'universal-cookie';

export default class History extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            image:'',
        }
    }
    componentDidMount(){
        this.image = ""
        var cookie = new Cookie();
        var username = cookie.get('username');
        var pair = this.props.history.location.pathname.split('/')[2]
        var that = this;
        axios.get(BASE_URL+'/image', {params:{username:username, pair:pair}}).then(
            function(result){
                console.log(result)

                that.setState({image: 'http://localhost:3000/ale/EURUSD/2020_1_7_18_15_6.png'});
            },
            function(error){

            }
        )
    }
    render(){
        return(
        <div style={{paddingTop:'70px', width:'100%'}}>
            <Container width='xl' maxWidth='xl' style={{height:'600px', margin:'0px', padding:'0px',display:'flex'}}>
                <Grid container spacing={1} width='lg' style={{height:'inherit', }}>
                    <Grid item xs={12} sm={1} lg={1} style={{margin:'auto', textAlign:'center'}}>
                        <IconButton><ChevronLeftIcon/></IconButton>
                    </Grid>
                    <Grid item xs={12} sm={10} lg={10} style={{margin:'auto', textAlign:'center', display:'flex'}}>
                        <img src={this.state.image} alt="" style={{maxWidth:"100%", display:'flex'}}/>
                    </Grid>
                    <Grid item xs={12} sm={1} lg={1} style={{margin:'auto', textAlign:'center'}}>
                        <IconButton>
                            <ChevronRightIcon/>  
                        </IconButton>                        
                    </Grid>
                </Grid>   
            </Container>             
        </div> 
        )
    }
}