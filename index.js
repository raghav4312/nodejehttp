const http = require('http');

var server = http.createServer((req,res)=>{
  console.log(req.url);
  res.setHeader('content-type','application/json');
  if(req.url==='/user')
  {
    console.log('hello');
    res.end("{'name':'RAGHAV','userId':'216'}");
  }
  res.end("done");
})

server.listen(5000);