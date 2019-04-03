var fs= require("fs");
var path= require("path");


fs.writeFile('./1.txt', '',  function(err) {
    if (err) {
        return console.error(err);
    }
});

fs.writeFile('./2.txt', '',  function(err) {
    if (err) {
        return console.error(err);
    }
});


function deleteFolderRecursive(path) {
    if( fs.existsSync(path) ) {
        fs.readdirSync(path).forEach(function(file) {
            var curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

deleteFolderRecursive("./compare/1/");
deleteFolderRecursive("./compare/2/");

fs.mkdir("./compare/1/",function(err){
    if (err) {
        return console.error(err);
    }
});

fs.mkdir("./compare/2/",function(err){
    if (err) {
        return console.error(err);
    }
    console.log('已重置，现在可以重新拷入数据');
});
