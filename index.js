var request = require('request');
var Agent = require('socks5-http-client/lib/Agent');

function getIp() {
	request({ url: 'http://ifconfig.me/ip', agentClass: Agent,
	agentOptions: {
		socksHost: '127.0.0.1', // Defaults to 'localhost'.
		socksPort: 9050 // Defaults to 1080.
	}}, function (error, response, body) {
		console.log('=======================');
		console.log('ip:', body); // Print the HTML for the Google homepage.
		console.log('=======================');
	});

}

function postData() {
	request.post({
		url: '',
		agentClass: Agent,
		agentOptions: {
			socksHost: '127.0.0.1', // Defaults to 'localhost'.
			socksPort: 9050 // Defaults to 1080.
		},
		formData: {}

	}, function(err, res) {
		console.log('=======================');
		console.log(err || res.statusCode);
		console.log('' || res.body);
		console.log('=======================');
	});

}

setInterval( function() {
	getIp();
	postData();
}, 12000)
