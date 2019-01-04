var buf1 = Buffer.from([0x68, 0x65]); //
var buf2 = Buffer.from([0x6c, 0x6c]); //
var buf3 = Buffer.from([0xe7, 0x95, 0x8c]);

var buf = Buffer.concat([buf1,buf2,buf3]);
console.log(buf.toString('utf8')); 