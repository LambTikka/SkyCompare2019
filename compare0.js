const readline=require('readline');
const fs= require('fs');
var iconv = require('iconv-lite');

const r1 =  readline.createInterface({
    input: fs.createReadStream("./1.txt").pipe(iconv.decodeStream('utf8'))
});
const r2 =  readline.createInterface({
    input: fs.createReadStream("./2.txt").pipe(iconv.decodeStream('utf8'))
});
var i=1;
r1.on('line', (line) => {
    console.log('文件夹compare/1/' + i + ".txt的内容是:  " + line);
    fs.createWriteStream("./compare/1/"+i+".txt").write(line);
   i++;
    // i += 1;
});

var n=1;
r2.on('line', (line) => {
    console.log('文件夹compare/2/' + n + ".txt的内容是:  " + line);
    fs.createWriteStream("./compare/2/"+n+".txt").write(line);
   n++;
    // n += 1;
});