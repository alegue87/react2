import axios from 'axios';
const {BASE_URL} = require('../../config');

export default class dashboardService{
    getDashboard(token, username, year, month, onSuccess, onError){
    
        axios.post(BASE_URL+'/dashboard', {
                token:token, 
                username:username,
                year:year,
                month:month
            }).then(
            function(result){
                onSuccess(result.data);
            },
            function(error){
                onError(error);
            }
        )
    }
}