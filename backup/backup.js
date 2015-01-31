/*
  Periodically saves the latest text to a text file
*/

var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');

// milliseconds to wait
var WAIT_TIME = 15000;
var BACKUPS_DIR = "backups";
var lastBackupData = "";

if (!fs.existsSync(BACKUPS_DIR)){
    fs.mkdirSync(BACKUPS_DIR);
}

function backup () {

  MongoClient.connect('mongodb://127.0.0.1:3001/meteor', function(err, db) {
    if (err) {
      throw err;
    }

    var collection = db.collection('texts');
    collection.findOne({}, {sort: {createdAt: -1}}, function (err, data) {

      var now = Date.now();
      var fileName = "backups/backup_"+now+".txt";

      if (!data) {
        return;
      }

      if (data.text == lastBackupData) {
        return;
      }

      lastBackupData = data.text;

      fs.writeFile(fileName, data.text, 'ascii', function (err, data) {
        if (err) {
          console.log("Backup error.");
        }
        console.log("Backed up to "+fileName);
      });
    });
  });

  setTimeout(backup, WAIT_TIME);
}

setTimeout(backup, WAIT_TIME);