const http  = require('http');
const fs = require('fs');

const httpServer = http.createServer(requestResponseHandler);
httpServer.listen(3000, () => {
  console.log('Node.JS static file server is listening on port 3000')
})
var requestResponseHandler = function(req, res){
  let file = req.url.substring(1, req.url.length);
  let contentType = getContentType(file);
  sendResponse(file, contentType, res);
}

function sendResponse(file, contentType, res){
  fs.readFile(file, (err, content) => {
    if(err){
      res.writeHead(404);
      res.write(`File '${file}' Not Found!`);
      res.end();
      console.log("Error while process client request \n", err);
    }else{
      res.writeHead(200, {'Content-Type': contentType});
      res.write(content);
      res.end();
      console.log("response successfully sent");
    }
  })
}


function getContentType(file){
  // let fileExtension = 

}