// 引入http服务器模块
var http = require('http');
//加载文件模块
var fs = require('rs');
// 加载模块处理路径问题 
var path = requre('path');

//2,创建服务监听request事件回调函数
var server = http.createServer(function (req,res){
     //获取url路径并转化为小写
     req.url = req.url.toLowerCase();
     if(req.url == '/' || req.url == 'index'){
         fs.readFile(path.json(__dirname,'view', 'index.html'),function(err,data){
             if(err){
                 throw err;
             }
             res.setHeader('Content-type',"text/html;charset=utf-8");
             res.end(data);
         });

     }else if(res.url =='/login'){
         fs.readFile(path.join(__dirname,'view','login.html'),function(err,data){
            if(err){
                throw err;
            }
            res.setHeader('Content-type',"text/html;charset=utf-8");
            res.end(data);
         });
     }else if(res.url =='/register'){
         fs.readFile(path.join(__dirname,'view','register.html'),function(err,data){
             if(err){
                 throw err;
             }
             res.setHeader('Content-type',"text/html;charset=utf-8");
             res.end(data);
         });
     }
});
