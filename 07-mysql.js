var express = require('express');
var app = express();

//1.引入所安装的mysql模块
var mysql = require('mysql');

//2.链接数据库参数配置
var connection =  mysql.createConnection({
  host:"127.0.0.1",
  port:3306,
  user:"root",
  password:"12345",
  database:"article"
});
//3.链接mysql
connection.connect(function(err){
  //判断是否链接成功
  if(err){
    throw err;
  }
  console.log('链接mysql成功');
});

app.get('/index',function(req,res){
    var sql = "select * from tp_article"
    connection.query(sql,function(err,rows,field){
        if(err){
            throw err;
        }
        console.log(rows.length);
        console.log(rows[1].title);
    });
    res.send('查询');
})

app.get('/add',function(req,res){
    var sql = "insert into tp_article(title,content,cat_id) values(?,?,?)";
    var bind = ['监听','你挣得的的好么','29']
    connection.query(sql,bind,function(err,result){
        if(err){
            throw err;
        }
        console.log(result); //返回结果一个对象
        res.send('入库');
    })
});

app.get('/upd',function(req,res){
    var sql = "update tp_article set title = ?, content= ?, cat_id = ?where article_id= ?";
    var he = ['啦啦啦啦','你一点也不好','30',36];
    connection.query(sql,he,function(err,result){
        if(err){
            throw err;
        }
        console.log(result);
        // result.affectedRows:获取的影响的横数
    })
    res.send('编辑');
})

app.get('/del',function(req,res){
    var sql = "delete from tp_article where article_id = ?";
    var bind = [36];
      connection.query(sql,bind,function(err,result){
          if(err){
              throw err;
          }
          console.log(result);     
      })
      res.send('删除');
})

app.listen(3000,function(){
    console.log('请访问');
});