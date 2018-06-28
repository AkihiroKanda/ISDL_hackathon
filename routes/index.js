const express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var loadJson = require('./load_json.js');
const bodyParser = require('body-parser');
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendfile('./views/Home.html');
});

router.get('/log', function(req, res, next) {
  res.sendfile('./views/show_log.html');
});

router.post('/log', function(req, res, next) {
  console.log("catch the post request");
  res.setHeader('Content-Type', 'application/json');

  // パラメータ名を出力
  console.log("PATH : " + req.body.path);
  dirPath=req.body.path;

  //ファイル一覧取得
  fs.readdir(dirPath, function (err, files) {
    if (err) {
        throw err;
    }
    res.send(loadJson.loadJson(dirPath,files));
  });

});

router.post('/profile', function(req, res, next) {
  console.log("catch the post request profile");
  res.setHeader('Content-Type', 'application/json');
  let userPath=["users.json"];
  // パラメータ名を出力
  console.log("PATH : " + req.body.path);
  dirPath=req.body.path;
  //user.jsonをsend
  res.send(loadJson.loadJson(dirPath,userPath));
});

module.exports = router;
