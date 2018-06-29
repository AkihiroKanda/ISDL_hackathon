function showSlackLog(idx,usersProfile,slackLog) {
	    //var element = document.createElement('div');
	    //element.id = "id";
	    //element.innerHTML = slackLog[0][0].text;
	    //element.style.backgroundColor = 'red';
//      var element = document.getElementById("header-bk");
//      element.innerHTML = idx;

      var element = document.getElementById("title");
      element.innerHTML = idx;

	    // body要素にdivエレメントを追加

      for(var i=0;i<slackLog.length;i++){
        for(var j=0;j<slackLog[i].length;j++){
          var box = document.createElement('div');
          box.className = "box";

          // HTMLImageElement オブジェクトを作成する
          var image = new Image();

          // URL を指定して、画像の読み込みを開始する
          image.src = "./images/icon/"+slackLog[i][j].user;
          image.className="img";
          image.align="left"

          // BODY のノードリストに登録する
//          document.body.appendChild(image);

          //追加
          //追加
          var cont = document.createElement('div');
          cont.className = "cont";


          var name_text = document.createElement('div');
          name_text.className = "name_text";



          //userNameを追加
          var name = document.createElement('div');
          name.className = "name";
          //elementReference.style.zIndex = "0";
          name.innerHTML = checkUser(usersProfile,slackLog[i][j].user);

          //時間追加
          var time = document.createElement('div');
          time.className = "time";
          //elementReference.style.zIndex = "0";
          time.innerHTML = transTime(slackLog[i][j].ts);

          //text追加
          var text = document.createElement('div');
          text.className = "text";
          var str = slackLog[i][j].text;
          str=str.replace(/\r?\n/g, '<br>');
          str=str.replace(/<http/g, 'http');
          text.innerHTML = str;

        //ファイル追加
          if(slackLog[i][j].file!=undefined){
            var divFile = document.createElement('div');
            divFile.className = "divFile";
              var file = document.createElement("a");
              file.className = "file";
              var filePath="./download_file/"+slackLog[i][j].file.id+"."+slackLog[i][j].file.filetype;
              file.href = filePath;
              var str = document.createTextNode(slackLog[i][j].file.name);
              file.appendChild(str);
              divFile.appendChild(file);

              name_text.appendChild(name);
              name_text.appendChild(time);
              cont.appendChild(name_text);
              cont.appendChild(text);
              cont.appendChild(divFile);
              box.appendChild(image);
              box.appendChild(cont);
              var objBody = document.getElementsByTagName("body").item(0);
              objBody.appendChild(box);

            }
            else{
              name_text.appendChild(name);
              name_text.appendChild(time);
              cont.appendChild(name_text);
              cont.appendChild(text);
              box.appendChild(image);
              box.appendChild(cont);


              var objBody = document.getElementsByTagName("body").item(0);
              objBody.appendChild(box);
            }
        }
      }
}
//タイムスタンプを日時に変換する関数
function transTime(timestamp){
  var date_format = function(num) {
      return ( num < 10 ) ? '0' + num  : num;
  };
  var d = new Date(timestamp*1000);
  var timedata= d.getFullYear() + '-' + date_format( d.getMonth() + 1 ) + '-' + date_format( d.getDate() )+ ' ' + date_format( d.getHours() ) + ':' + date_format( d.getMinutes() ) + ':' + date_format( d.getSeconds() ) ;
  return timedata;
}

//userIDからuserNameへ変換
function checkUser(profiles,sendUser){
    for(var i=0;i<profiles[0].length;i++){
      if(profiles[0][i].id==sendUser){
        if(!profiles[0][i].profile.display_name){
            return profiles[0][i].profile.real_name;
        };
        return profiles[0][i].profile.display_name;
      };
    };
    return "Unknown User";
}
