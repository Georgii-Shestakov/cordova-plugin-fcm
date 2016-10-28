var exec = require('cordova/exec');

function FCMPlugin() { 
	console.log("Fcm.js: is created");
}

// GET TOKEN //
FCMPlugin.prototype.getToken = function( success, error ){
	exec(success, error, "Fcm", 'getToken', []);
}
// NOTIFICATION CALLBACK //
FCMPlugin.prototype.onNotification = function( callback, success, error ){
	FCMPlugin.prototype.onNotificationReceived = callback;
	exec(success, error, "Fcm", 'registerNotification',[]);
}
// DEFAULT NOTIFICATION CALLBACK //
FCMPlugin.prototype.onNotificationReceived = function(payload){
	console.log("Received push notification")
	console.log(payload)
}

module.exports = new FCMPlugin();
