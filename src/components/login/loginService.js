import axios from 'axios';
const {BASE_URL} = require('../../config');

export default class LoginService{
    login(username, password, onSuccess, onError){
        axios.post(BASE_URL+'/login', {username:username, password: password})
            .then(function(result){
                if(result.data.loginSuccess){
                   console.log("Login effettuato, token" + result.data.token)
                    onSuccess(username, result.data.token) 
                }
                else{
                    onError('Username o password errati')
                }
            },function(error){
                console.error("Errore durante il login: "+error)
                onError(error)
            })
    }
}