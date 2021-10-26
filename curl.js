const request = require('request');

module.exports = function(url){
    request(url, function(error, respose, body){
        if(error){
            throw error;
        }
        console.log(body);
    })
}