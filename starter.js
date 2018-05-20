#!/usr/bin/env node

var sphero = require("sphero")
// var spheroId = 'C2:92:5C:11:E1:F8';
var spheroId = process.argv[2]
var orb = sphero(spheroId)

// TODO: move these to a local lib folder
// var imuAngles = require(".data_stream/imuAngles")
// var odometer = require(".data_stream/odometer")
var streamData = require("./dataStream")

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
	// below is in sphero/lib/devices/custom.js
	orb.on("imuAngles", function(data) {
		streamData.imuAngles(data)
	})
	orb.on("odometer", function(data) {
		streamData.odometer(data)
	})
	orb.on("gyroscope", function(data) {
		streamData.gyroscope(data)
	})
	orb.on("velocity", function(data) {
		streamData.velocity(data)
	})
	orb.on("accelOne", function(data) {
		streamData.accelOne(data)
	})
	orb.on("accelerometer", function(data) {
		streamData.accelerometer(data)
	})
	orb.on("motorsBackEmf", function(data) {
		streamData.motorsBackEmf(data)
	})
})
