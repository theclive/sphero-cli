#!/usr/bin/env node

var sphero = require("sphero")
// var spheroId = 'C2:92:5C:11:E1:F8';
var spheroId = process.argv[2]
var orb = sphero(spheroId)

// TODO: move these to a local lib folder
var imuAngles = require("./imuAngles")
var odometer = require("./odometer")


var stdin = process.openStdin()
stdin.addListener("data", function(data) {
	var command = "orb." + data.toString().trim()
	try {
		var result = eval(command)
		// console.info(typeof(result))
		console.log("[EXECUTING]: " + result)
	} catch(error) {
		console.log(error)
	}
})

orb.connect(function() {
	console.log("connected... waiting for input:")

	// output sphero sensor data
	orb.on("imuAngles", function(data) {
		imuAngles.stream(data)
	});
	orb.on("odometer", function(data) {
		odometer.stream(data)
	});

})
