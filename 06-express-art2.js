//引入模板
var express = require('express');
var artTemplate= require('art-template');
var expressArtTemplate = require('express-art-template');
var path = require('path');
var moment = require('moment');
var app = express();

//配置express框架模板引擎
app.set('views',path.join(__dirname,'view')); 
app.engine('html',expressArtTemplate);
app.set('view.engine','html');

//定义一个过滤器dateFormat
artTemplate.defaults.imports.dateFormat = function(time,fromat = 'YYY-MM-DD HH:mm:ss'){
    return moment.unix(time).format(fromat);
}
 
 
app.get('/detail',function(req,res){
    // res.send('detail')
    res.render('detail.html',{
        "name" : "王大锤",
        "age" : 110,
        "users" : [
            '小强','大强','坚强'
        ],
        time:1546499716 
    });
});

app.listen(3000,function(){
    console.log('请访问');
});