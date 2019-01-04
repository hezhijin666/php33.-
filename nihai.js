

// 异步读取文件
var fs = require('fs');

// 写入文件
fs.readFile('./2.txt','utf8',function(err,data){
	 if(err){
	 	 console.log(err);
	 	 // 抛出错误
	 	 throw err;
	 }
        // 打印读取文件数据
        console.log(data);    
});