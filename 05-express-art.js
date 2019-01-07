// 引入模板
var express = require('express');
var artTemplate = require('art-template');
var expressArttemplate = require('express-art-template');
var path = require('path');

var app = express();

//配置好express框架的模板引擎为art_template
app.set('views',path.join(__dirname,'view')); //设置视图所在的文件夹
app.engine('html',expressArttemplate); //设置模板文件的后缀为HTML
app.set('view engine', 'html');//设置视图引擎上面的HTML

app.get('/detail',function(req,res){
    // res.send('detail');
    //分配模板变量
    res.render('detail.html',{"name":"李四"});

});


app.listen(3000,function(){
     console.log('欢迎你回来');
})
