//import * as si from 'systeminformation'; 
const si = require('systeminformation');

const result=[];
Promise.all([
    si.cpu(function(data){
        result.push(data);
    }),
    si.system(function(data){
        result.push(data);
    }),
    si.mem(function(data){
        result.push(data);
    }),
    si.osInfo(function(data){
        result.push(data);
    }),
    si.currentLoad(function(data){
        result.push(data);
    }),
    si.processes(function(data){
        result.push(data);
    }),
    si.diskLayout(function(data){
        result.push(data);
    }),
    si.networkInterfaces(function(data){
        result.push(data);
    })])
    .then((result)=>{
        console.log(result);
    });

    const hostname = 'localhost';
    const port = 8082;
    const http = require('http');
    const requestListener = function (req, response){
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(JSON.stringify(result));
        response.end(`{"message": "This is a JSON response"}`);
    }
    
    const server = http.createServer(requestListener);
    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/api/v1/sysinfo`);
    });




// const si = require('systeminformation');
// const { createServer } = require('http');



// const server = createServer ((request , response) => { 
//   response.writeHead(, );
//   response.write('<h1>hi </h1>');
// return response.end; 
// });

// server.listen(8082); 

// // promises style - new since version 3

// // si.cpu()
// //   .then(data => console.log(data))
// //   .catch(error => console.error(error));

// // si.system()
// //   .then(data => console.log(data))
// //   .catch(error => console.error(error));


//   //server: 
// //createserver
// //requestlistener
// //listen port 

// //a coder : server ( nodejs + api http )

// // client --- request http /api/v1/sysinfo--->server
// //client <--- response IsystemInfo( a coder) -- server 