var path = require('path');
var fs = require('fs');
var baseSite = 'js';
var fileDirUrl ={};
  //=======
  var pageDirs = fs.readdirSync(baseSite);
  pageDirs.forEach(function (fileDir) {
     var pageInfo = fs.readdirSync(baseSite+'/'+fileDir);
     pageInfo.forEach(function(file){
      fileDirUrl[fileDir] = __dirname+'/js/'+fileDir+"/"+file;
     });
  });
console.log(fileDirUrl);
module.exports = {
    entry:fileDirUrl,
    output: {
        path:__dirname+'/public/js/',
        filename: '[name]/index.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js|jsx$/, 
              loaders: ['babel']
            }
        ],

    }
}