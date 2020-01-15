import React from 'react';
import '../../css/login/login.css';
import User from '../../images/user.png';
import LoginService from './loginService';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';

export default class Login extends React.Component {
    constructor(prop){
        super(prop);
        this.state = {
            username:'',
            password:'',
            loginSuccess:false,
            loginError:false,
            loginSuccessMessage:'',
            loginErrorMessage:''
        }
        this.loginService = new LoginService()
    }
    inputChange(field, event){
        this.setState({
            [field]:event.target.value,
            loginError:false,
            loginErrorMessage:''
        })
    }
    submit(event){
        event.preventDefault();
    }
    onSuccess(username, token){
        const cookies = new Cookies();
        cookies.set('token', token, { path: '/' })
        cookies.set('username', username, {path: '/'})
        this.setState({
            loginSuccess:true,
            loginSuccessMessage:'Login effettuato, token: '+cookies.get('token')
        })
    }
    onError(error){
        this.setState({
            loginError:true,
            loginErrorMessage:'Errore durante il login: '+error
        })
    }
    login(event){
        this.loginService.login(
            this.state.username,
            this.state.password,
            this.onSuccess.bind(this),
            this.onError.bind(this)
        )
        console.log('Username: '+this.state.username)
        console.log('Password: '+this.state.password)
    }
    showSuccessLogin(){
        if(this.state.loginSuccess){
            return(
                <div style={{color:'green'}}>{this.state.loginSuccessMessage}</div>
            )
        }
        else{
            return(<div></div>)
        }
    }
    showErrorLogin(){
        if(this.state.loginError){
            return(
                <div style={{color:'red'}}>{this.state.loginErrorMessage}</div>
            )
        }
        else{
            return(<div></div>)
        }
    }
    componentDidUpdate(){
        if(this.state.loginSuccess){
            setTimeout(() => {
                this.props.history.push('/dashboard')
            },2000)
        }
    }
    render() {
        var loginSuccessMessage = this.showSuccessLogin();
        var loginErrorMessage = this.showErrorLogin();
        return (
            <div className='wrapper fadeInDown' style={{backgroundColor:'white'}}>
                <div id='formContent'>
                    <div className='fadeIn first'>
                        <img src={User} id='icon' alt='User Icon' style={{width:'35px'}} />
                    </div>

                    <form onSubmit={this.submit}>
                        <input 
                            type='text' 
                            id='login' 
                            className='fadeIn second' 
                            name='login' 
                            placeholder='login'
                            value={this.state.username || ''}
                            onChange={this.inputChange.bind(this,'username')}
                            />
                        <input 
                            type='password' 
                            id='password' 
                            className='fadeIn third' 
                            name='login' 
                            placeholder='password'
                            value={this.state.password || ''}
                            onChange={this.inputChange.bind(this,'password')}
                            />
                        <input 
                            type='submit' className='fadeIn fourth' value='Log In'
                            onClick={this.login.bind(this)}
                            />
                    </form>

                    <div id='formFooter'>
                        <a className='underlineHover' href='#'>Forgot Password?</a>
                        {loginSuccessMessage}
                        {loginErrorMessage}                       
                    </div>
                </div>
            </div>
        )
    }                             
}