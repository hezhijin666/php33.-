//加http模板
var http =require('http');

//创建http服务器，设置监听事件rquire 请求事件处理程序
var server = http.createServer();

// 服务器对象监听request 请求事件，用于监听客户端的请求
server.on('request',function(req,res){
	 //red 请求对象的 res响应对象
	 res.setHeader("Content-type","text/html;charset=utf-8");
	 // 处理客户端请求逻辑
	 console.log('请求');
	 res.end('你好哦吗'); //结束响应
});

 // 启动http服务，开始监听3000端口
 server.listen(3000,function(){
  console.log('服务器已经开始,请访问：http://127.0.0.1:3000');
 });