// 1. 通过 Buffer.from() 创建一个 Buffer 对象
//  创建一个字节数组
var array = [0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0xe4, 0xb8, 0x96, 0xe7, 0x95, 0x8c];
//  把字节数组变为Buffer 对象
var buf = Buffer.from(array);
//  把buffer对象变为可读的utf8编码的字符串格式
console.log(buf.toString('utf8')); // hello 世界

// 2 通过字符串来创建一个 Buffer 对象
// Buffer.from(string[, encoding]) 
var buf = Buffer.from('你好世界！ Hello World!');
console.log(buf); // <Buffer e4 bd a0 e5 a5 bd e4 b8 96 e7 95 8c ef bc 81 20 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>
console.log(buf.toString('utf8')); 