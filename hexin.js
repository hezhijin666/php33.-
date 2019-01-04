var http = require("http");
var fs = require('fs');
var path = require('path');
//引入查询字符串的模块querystirng
var querystring = require("querystring");

var server = http.createServer((req,res)=>{
  req.url = req.url.toLowerCase();
  req.method = req.method.toLowerCase();
  //判断是否是/login且是get请求
  if(req.url == '/login' && req.method == 'get'){
    //读取静态文件login.html并响应
    fs.readFile(path.join(__dirname,'login.html'),'utf8',(err,data)=>{
      if(err){
        throw err;
      }
      res.end(data);
    })
  }else if(req.url == '/login' && req.method == 'post'){
    //由于post提交的数据较大，每次只会提交过来一部分数据都会触发req对象的data事件
    //只有数据全部传输完毕之后，会触发req对象的end事件
    var arr = []; // 用于存储chunk
    req.on('data',(chunk)=>{
      //chunk是个buffer对象
      // console.log('data');
      //把chunk存入到数组arr中，
      arr.push(chunk);
    });
    req.on('end',()=>{
      //需要把data事件中的buffer对象数据转化为utf8格式数据
      // console.log('end');
      //把多个小buffer对象拼接成一个大的buffer对象
      var buf = Buffer.concat(arr);
      var postData = buf.toString('utf8');
      //console.log(postData); // 返回的是一个查询字符串的格式username=admin&password=123456
      console.log( querystring.parse(postData) ); //{ username: 'adminadmin', password: '12345678' }
    });

    res.end('post');
  }
});

server.listen(3000,()=>{
  console.log("请访问http://127.0.0.1:3000");
})
// http path fs url=>req.url   querystring=>name=dabai&age=24

//获取post参数
//1.监听req对象的data事件，在此事件中把每次传输过来的chunk对象（buffer对象），存进数组中
//2.监听req对象的end事件，此事件只要被触发，说明post数据已经接收完毕，此时，我们把数组中的buffer对象连接成一个大的buffer对象
//3.把大的buffer对象调用toSting(),返回的是查询字符串的格式，
//最后借助querystirng可以把查询字符串变为一个json格式的对象，方便获取数据c