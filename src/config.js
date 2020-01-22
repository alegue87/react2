
var BASE_URL,
    HOST_PORT;

if(process.env.NODE_ENV == 'production'){
    
    BASE_URL = 'https://expressapireact2.herokuapp.com:3000/testAPI'
    HOST_PORT = 'https://expressapireact2.herokuapp.com:3000'
}
else{
    BASE_URL = 'http://localhost:3000/testAPI'
    HOST_PORT = 'http://localhost:3000'
}


module.exports = {BASE_URL, HOST_PORT};

console.log(process.env.NODE_ENV)