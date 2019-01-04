
//引入文件服务器模板
var http = require('http');

//创建服务器，设置监听require事件的回调函数
var server = http.createServer(function(req,res){
    req.url = req.url.toLowerCase();  //把url转化为小写，在赋值req.url属性
    if(req.url == '/' || req.url == 'index'){
        res.end('index');
    }else if(req.url == '/login'){
        res.end('login');
    }else if(req.url == '/register'){
        res.end('register');
    }else{
        res.end('400 Not Found');
    }
});

//启动http服务器，监听3000端口
server.listen(3000,function(){
    console.log('请访问: http://127.0.0.1:3000');
});