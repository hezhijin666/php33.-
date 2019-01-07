//引入模板
var express = require('express');
var path = require('path');

var app = express();

//定义静态托管静态资源的中间插件，指定静态资源所在的目录
console.log(express.static(path.join(__dirname,'public')));

//这里的虚拟路径，要获取的到访问<img src='/public/images/dagai.jpn'> 的真实路径，获取到
// 当访问静态资源文件的时候，都会注册好的目录/public中寻找，找到了并读取静态文件响应给客户端
app.use('/public',express.static(path.join(__dirname,'public')));

app.get('/login',function(req,res){
  res.sendFile(path.join(__dirname,'view/login.html'));
})

app.get('/register',function(req,res){
   res.sendFile(path.join(__dirname,'view/register.html'))
})

app.listen(3000,function(){
    console.log('请求访问');
});