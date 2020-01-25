import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import axios from 'axios';
import Cookie from 'universal-cookie';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
const { BASE_URL, HOST_PORT } = require('../../config');

export default class History extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            image: '',
            imagesData:[],
            imageIndex:0
        }
        var cookie = new Cookie();
        this.username = cookie.get('username');
        var splittedPathname = this.props.history.location.pathname.split('/')
        this.pair = splittedPathname[2]
        this.year = splittedPathname[3]
        this.month = splittedPathname[4]        
    }
    previousImage(){
        if(this.state.imageIndex == 0){
            this.setState({imageIndex: this.state.imagesData.length-1})
        }
        else{
            this.setState({imageIndex: this.state.imageIndex-1})
        }
    }
    nextImage(){
        if(this.state.imageIndex == this.state.imagesData.length-1)
        {
            this.setState({imageIndex: 0})
        }
        else{
            this.setState({imageIndex: this.state.imageIndex+1})    
        }
    }

    onKeyPress(event){
        if(event.keyCode == 37){
            this.previousImage()
        }
        else if(event.keyCode == 39)
        {
            this.nextImage()
        }
    }
    componentWillMount() {
        var cookie = new Cookie();
        var token = cookie.get('token')
        var that = this
        axios.get(BASE_URL + '/imagesData', { params: {
                token: token,
                username: that.username,
                pair: that.pair,
                month: that.month,
                year: that.year
            } }).then(
            function (result) {
                console.log(result)
                if(result.data.authenticated){
                    that.setState({imagesData: result.data.info})    
                }
                else{
                    window.location.href = '/login'
                }
                
            },
            function (error) {
                console.log(error)
            }
        )
    }
    render() {
        var image = "",
            period = "Periodo: ", 
            datetime = "Data ora: ", 
            balance = "Balance: ", 
            equity = "Equity: ", 
            leverage = "Leverage: ", 
            free_margin = "Margine libero: ", 
            profit = "Profitto: ",
            positions = []

        if(this.state.imagesData[0] != undefined){
            image = HOST_PORT+'/'+this.username+'/'+this.pair+'/'+this.state.imagesData[this.state.imageIndex].filename;
            var data = this.state.imagesData[this.state.imageIndex]
            var dt = new Date(data.datetime)
            period += data.period +' M' // Da prendere nel modo corretto
            datetime += dt.getDate()+'-'+(dt.getMonth()+1)+'-'+dt.getFullYear()+' '+dt.getHours()+':'+dt.getMinutes()+':'+dt.getSeconds()
            balance += data.balance + ' €'
            equity += data.equity + ' €'
            leverage += "1:"+data.leverage
            free_margin += Math.floor(data.free_margin)
            profit += Math.floor(data.profit) +' €'
            positions = data.positions
        }
        document.addEventListener("keydown", this.onKeyPress.bind(this), false)
        return (
            <div style={{ paddingTop: '70px', width: '100%' }}>
                <Container width='xl' maxWidth='xl' style={{ height: '600px', margin: '0px', padding: '0px', display: 'flex' }}>
                    <Grid container spacing={0} width='lg' style={{ height: 'inherit', }}>
                        <Grid item xs={12} sm={2} lg={2}>
                            <Paper>
                                <List>
                                    <ListItem><ListItemText primary={period}/></ListItem>
                                    <ListItem><ListItemText primary={datetime}/></ListItem>
                                    <ListItem><ListItemText primary={balance}/></ListItem>
                                    <ListItem><ListItemText primary={equity}/></ListItem>
                                    <ListItem><ListItemText primary={leverage}/></ListItem>
                                    <ListItem><ListItemText primary={free_margin}/></ListItem>
                                    <ListItem><ListItemText primary={profit}/> </ListItem>
                                </List>
                            </Paper>

                        </Grid>
                        <Grid item xs={12} sm={1} lg={1} style={{ margin: 'auto', textAlign: 'center' }}>
                            <IconButton
                                onClick={this.previousImage.bind(this)}
                            ><ChevronLeftIcon /></IconButton>
                        </Grid>
                        <Grid item xs={12} sm={8} lg={8} style={{ margin: 'auto', textAlign: 'center', display: 'flex' }}>
                            <Paper style={{padding:'5px'}}>
                                <img src={image} alt="" style={{ maxWidth: "100%", display: 'flex' }} />   
                            </Paper>
                        </Grid>                       
                        <Grid item xs={12} sm={1} lg={1} style={{ margin: 'auto', textAlign: 'center' }}>
                            <IconButton
                                onClick={this.nextImage.bind(this)}
                            ><ChevronRightIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={0} sm={3} lg={3}/>
                        <Grid item xs={12} sm={8} lg={8}>
                            <TableContainer component={Paper}>
                                <Table size="small" aria-label="a dense table" style={{marginTop:'20px'}}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Ticket</TableCell>
                                            <TableCell>Apertura</TableCell>
                                            <TableCell>Tipo</TableCell>
                                            <TableCell>Lotti</TableCell>
                                            <TableCell>Profit</TableCell>
                                            <TableCell>Swap</TableCell>
                                            <TableCell>Commissioni</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {positions.map( row => (
                                        <TableRow>
                                            <TableCell>{row.ticket}</TableCell>
                                            <TableCell>{row.open_time}</TableCell>
                                            <TableCell>{row.pos_type}</TableCell>
                                            <TableCell>{row.lots}</TableCell>
                                            <TableCell>{row.profit}</TableCell>
                                            <TableCell>{row.swap}</TableCell>
                                            <TableCell>{row.commission}</TableCell>
                                        </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid item xs={0} sm={1} lg={1}/>
                    </Grid>
                </Container>
            </div>
        )
    }
}