var fs= require("fs");
var path= require("path");
var readline=require('readline');
var iconv = require('iconv-lite');

function wenjian(path) {
    if( fs.existsSync(path) ) {
        fs.readdirSync(path).forEach(function(file) {
            var curPath = path  + file;
            var fileStr = fs.readFileSync(curPath,{encoding:'binary'});
            var buf = new Buffer(fileStr, 'binary');
                var data= iconv.decode(buf,'utf8');
                console.log("    "+data);
            });
        }
    }

console.log("###############################表2###############################");
wenjian('./compare/2/');
console.log("#################################################################");