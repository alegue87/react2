import axios from 'axios';

export default class LoginService{
    login(username, password, onSuccess, onError){
        // Da cambiare email->username
        axios.post('http://localhost:3000/testAPI/login', {username:username, password: password})
            .then(function(result){
                console.log("Login effettuato, token" + result.data.token)
                onSuccess(result.data)
            },function(error){
                console.error("Errore durante il login: "+error)
                onError(error.response.data)
            })
    }
}