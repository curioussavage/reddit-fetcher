var jsonFile = require('jsonfile');

var config;

var getLastItem = function() {
	jsonFile.readFile('/home/pi/scripts/config.json', function(err, obj) {
	  if (!err) {
	    config = obj;
	    console.log(config.latest, '\n');
	  } else {
	    console.log('no config, creating now...')
	    config = { latest: "" };
	    jsonFile.writeFile('/home/pi/scripts/config.json', config, function(err) {
	      console.log('err creating file: \n', err);
	    })
	  }
	});
	return config;
}


var storeLastItem = function(newVal) {
	config.latest = newVal;

  jsonFile.writeFile('/home/pi/scripts/config.json', config, function(err) {
	  if (!err) {
	  	console.log('new config written')
	  }
	})
}

module.exports = {
	getLastItem: getLastItem,
	storeLastItem: storeLastItem,
}