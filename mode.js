//加载模板
var http = require('http');

var server = http.createServer(function(req,res){
    // res.writeHead("Content-type","text/html;charset=utf-8");
    res.setHeader("Content-type","type/html;chatset=utf-8");
    console.log('jjdjdj');
    res.end('你的大');
});
server.listen(3000,function(){
    console.log('http://127.0.0.1:3000');
});