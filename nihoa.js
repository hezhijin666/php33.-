console.log(1111);
// 异步读取文件内容
var fs = require('fs');

//读取1.TXT文件的内容
fs.readFile('./1.txt','utf8',function(err,data){
	 if(err){
	 	 //抛出错误
	 	 throw err;
	 }
	 console.log(data);
	 console.log(222);
});

  console.log(333);