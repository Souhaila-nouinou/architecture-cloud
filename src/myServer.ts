import mySysInfo from "./systemInfo";
// const http = require('http');
// import { createServer,  } from "http";
import http from 'http';


export function Myserver() {
    const port = 8082;
    const server = http.createServer(async (req, res) => {
      if(req.url === '/api/v1/sysinfo') {
    //    console.log (req.url)
       res.writeHead(200, { 'Content-Type': 'application/json' });
        let result = await  mySysInfo();
        res.end(result);
      } else {
        res.end("Erreur 404");  
      }
    //   res.end("end");
    });
    
    server.listen(port , ()=>{
        console.log(`The server is listening in the port ${port}`);
    });
    return server;
}




// const hostname = 'localhost';
// const port = 8082;
// const http = require('http');
// // const requestListener = function (req, response){
//     response.writeHead(200, {'Content-Type': 'application/json'});
//     // response.write(JSON.stringify(myInfo));
//     let result =  mySysInfo();
//     response.end(`{"message": "This is a JSON response"}`);
// }

// const server = http.createServer(requestListener);
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/api/v1/sysinfo`);
// });
