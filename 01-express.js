//引入模板
var express = require('express');
//实例画一个对象
var app = express();

//定义一个中间插件（任何请求方式，任何url都会经过）
// 一般在此中间件中做一些最开始的初始化操作，如判断用户是否登录
app.use('/',function(req,res,next){
    console.log('先经过我');
    // res.send('放她走');
    next();//代表执行下一个//
})

//定义路由（路由函数也是中间插件）
app.all('/',function(req,res,next){
    console.log('后来你跑了');
    // res.send('index');
    next();
});

// 定义路由
app.use('/',function(req,res,next){
     console.log('进来了');
    //  res.send('login');
    next();
});
// 定义路由
app.use('/',function(req,res){
    console.log('请进来');
    res.send('jjj');
})
 

app.listen(3000,function(){
    console.log('请访问');
})