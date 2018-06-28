// -------------------------------------------------------------------
//  bb01.js
//
//                  Feb/15/2018
//
// -------------------------------------------------------------------
function getParam()
{
    var url   = location.href
    parameters    = url.split("?")
    params   = parameters[1].split("&")
    var paramsArray = []
    for ( it = 0; it < params.length; it++ ) {
        neet = params[it].split("=")
        paramsArray.push(neet[0])
        paramsArray[neet[0]] = neet[1]
        }
    var categoryKey = paramsArray["id"]
    decStr = decodeURI(categoryKey)
    console.log("Path:"+decStr)
    return decStr
}

// -------------------------------------------------------------------
jQuery(function()
{
    const idx = getParam()
    var dirPath="slack_log/channel/"+idx
    var userPath="slack_log"
    var log="/log"
    var profile="/profile"
    console.log("Path:"+dirPath)
    //JSON一覧とユーザー情報を取得しログ出力
    showSlackLog(idx,user=sendinfo(userPath,profile),sendinfo(dirPath,log))

})

// -------------------------------------------------------------------
