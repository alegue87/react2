
var BASE_URL,
    HOST_PORT;
var host = window.location.href.split('/')[2].split(':')[0] 
if(host == 'localhost'){
    BASE_URL = 'http://localhost:3000/testAPI'
    HOST_PORT = 'http://localhost:3000'    
}
else{
    BASE_URL = 'https://expressapireact2.herokuapp.com:3000/testAPI'
    HOST_PORT = 'https://expressapireact2.herokuapp.com:3000'
}


module.exports = {BASE_URL, HOST_PORT};

console.log("host:"+host)