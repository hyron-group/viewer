const fs = require("fs");
const node_path = require("path");
const viewCompiler = require("../lib/engine");
var renderedView = {};

function scanDir(path){
    var viewFile = fs.readdirSync(path);

    viewFile.forEach((fileName)=>{
        var filePath = node_path.join(path, fileName);
        if(fs.statSync(filePath).isDirectory()){
            return scanDir(filePath);
        }
        renderedView[fileName] = viewCompiler(filePath);
    })
}

function getView(name){
    return renderedView[name];
}

module.exports = {
    scanDir,
    getView
}