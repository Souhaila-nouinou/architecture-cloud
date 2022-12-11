import  si from 'systeminformation'; 
import ISystemInformation from './ISystemInformation'; 

// const si = require('systeminformation');

//create variable 
const mySysInfo = async() =>{
    const myInfo : ISystemInformation = {
        cpu : undefined ,
        system : undefined ,
        mem : undefined ,
        os : undefined ,
        currentLoad : undefined ,
        processes : undefined ,
        diskLayout : [] ,
        networkInterfaces : [] 
    }

    myInfo.cpu = await si.cpu();
    myInfo.system = await si.system();
    myInfo.mem = await si.mem();
    myInfo.os = await si.osInfo();
    myInfo.currentLoad = await si.currentLoad();
    myInfo.processes = await si.processes();
    myInfo.diskLayout = await si.diskLayout();
    myInfo.networkInterfaces = await si.networkInterfaces();

    //console.log("test");

    return (JSON.stringify(myInfo, null, 4)); 



/* 
    console.log("this iss myyyyy info --------------------");
    console.log(myInfo);

    const hostname = 'localhost';
    const port = 8082;
    const http = require('http');
    const requestListener = function (req, response){
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(JSON.stringify(myInfo));
        response.end(`{"message": "This is a JSON response"}`);
    }
    
    const server = http.createServer(requestListener);
    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/api/v1/sysinfo`);
    });

    */

}; 


export default mySysInfo ;

    
// const syssysinfo = async () => {
//     return result; 
// }


// export default syssysinfo; 


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


/*



const result=[];
Promise.all([
    si.cpu(function(data){
        result.push(data);
        myInfo.cpu=data;
    }),
    si.system(function(data){
        result.push(data);
        myInfo.system=data;
    }),
    si.mem(function(data){
        result.push(data);
        myInfo.mem=data;
    }),
    si.osInfo(function(data){
        result.push(data);
        myInfo.os=data;
    }),
    si.currentLoad(function(data){
        result.push(data);
        myInfo.currentLoad=data;
    }),
    si.processes(function(data){
        result.push(data);
        myInfo.processes=data;
    }),
    si.diskLayout(function(data){
        result.push(data);
        myInfo.diskLayout=data;
    }),
    si.networkInterfaces(function(data){
        result.push(data);
        myInfo.networkInterfaces=data;
    })])
    .then((result)=>{
        // console.log(result);
    });

*/