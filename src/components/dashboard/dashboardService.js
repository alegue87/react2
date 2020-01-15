import axios from 'axios';
const {BASE_URL} = require('../../config');

export default class dashboardService{
    getDashboard(token, username, onSuccess, onError){
    
        axios.post(BASE_URL+'/dashboard', {token:token, username:username}).then(
            function(result){
                onSuccess(result.data);
            },
            function(error){
                onError(error);
            }
        )
    }
}