var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();
app.get('/login',function(req,res,next){
  console.log('111');
  if(!fs.existsSync(path.join(__dirname,'view/login222.html'))){
    var err = new Error('login.html文件不存在');
    next(err); //执行错误中间件
  }
  console.log('回来');
  console.log(req.code);
  if(!req.code){
    //上面判断为假，说明没有经过错误中间件，则没有code属性,则响应数据
    res.send('login');
  }
})

app.get('/register',function(req,res){
  res.send('register');
})

//定义错误中间件
app.use('/',function(err,req,res,next){
  req.code = 'error'; //给req对象设置一个属性code,代表是从错误中间件过去的
  console.log(222);
  //显示404错误页面
  res.end('40444444'); 
  // return false; //不行 ，还会跑到上面中间件去
})

app.listen(3000,function(){
  console.log('请访问http://127.0.0.1:3000');
})