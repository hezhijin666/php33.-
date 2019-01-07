//引入模板
var express = require('express');
var app = express();

var path = require('path');

//定义一个普通中间件
app.use('/',function(req,res,next){
    console.log('先进过1');
    next(); //执行下一个中间件
});

app.use('/',function(req,res,next){
    console.log('后经过我');
    next();
})

//定义一个/login
app.get('/login',function(req,res){
   //触发错误中间件的两个条件： 1，next（err） throw new Error（文件找不到 ）
   throw new Error('login.html文件找不到');
   //上面代码抛出错误， 下面代码不会执行，直接执行我们的错误处理中间件
   res.sendFile(path.join(__dirname,'view/login.html'));
})

// 定义路由（路由函数也是中间件）
app.get('/',function(req,res){
    res.send('index');
});

//定义一个错误中间件
app.use('/',function(err,req,res,next){
    console.log(err.message);  //获取到上面抛出错误的信息
     res.send('404');
})

app.listen(3000,function(){
    console.log('请访问');
});