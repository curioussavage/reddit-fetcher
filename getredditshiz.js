var request = require('request');
var configManager = require('./config.js');
var dbManager = require('./sqlinit.js');
var util = require('./utils.js');
// config will be used to keep track of last thing downloaded;
var config = configManager.getLastItem();



var url = 'http://www.reddit.com/r/technology.json';
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // possibly check config for latest link pulled
    var listings = JSON.parse(body);
    processlistings(listings);

    // TODO: fix this. set new latest
    // configManager(x.data.children[x.data.children.length].name);
    dbManager.db.close();
  }
})


var processlistings = function(listings) {
  listings.data.children.forEach(function(item, index){
    var link = item.data;
    var args = util.buildLinkToStore(link);

    db.manager.saveNewPost(args, null); // new args and callback if wanted.
  });
}