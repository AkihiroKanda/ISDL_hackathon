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
          //userNameを追加
          var element = document.createElement('div');
          element.className = "name";
          //elementReference.style.zIndex = "0";
          element.innerHTML = checkUser(usersProfile,slackLog[i][j].user);

          var objBody = document.getElementsByTagName("body").item(0);
          objBody.appendChild(element);

          //時間追加
          var element = document.createElement('div');
          element.className = "time";
          //elementReference.style.zIndex = "0";
          element.innerHTML = transTime(slackLog[i][j].ts);

          var objBody = document.getElementsByTagName("body").item(0);
          objBody.appendChild(element);

          //text追加
          var element = document.createElement('div');
          element.className = "text";
          //elementReference.style.zIndex = "0";
          //  console.log(slackLog[i][j].text);
          var str = slackLog[i][j].text;
          str = str.replace(/\r?\n/g, '<br>');
          element.innerHTML = str;


          var objBody = document.getElementsByTagName("body").item(0);
          objBody.appendChild(element);

          // HTMLImageElement オブジェクトを作成する
          var image = new Image();

          // URL を指定して、画像の読み込みを開始する
          image.src = "./images/icon/"+slackLog[i][j].user;
          image.className="img";

          // BODY のノードリストに登録する
          document.body.appendChild(image);
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
        return profiles[0][i].profile.display_name;
      }
    };
    return "Unknown User";
}
