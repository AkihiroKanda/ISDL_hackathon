var fs = require('fs');
exports.loadJson = function(dirPath,files) {
    var filePath //ファイルパス
    var dataJson //JSONデータを格納

//ファイル読み込みとJSONデータの結合
    for(var i=0;i<files.length;i++){
      filePath=dirPath+"/"+files[i];
      var stringJson = fs.readFileSync(filePath, 'utf8');
      if(files.length==1){
        dataJson = "["+stringJson+"]";
      }
      else if(i==0){
        dataJson = "["+stringJson+",";
      }
      else if(i==files.length-1){
        dataJson += stringJson+"]";
      }
      else{
        dataJson += stringJson+",";
      }
    }
    console.log(dataJson);
    var slackLogJSON = JSON.parse(dataJson);

    return slackLogJSON;
};
