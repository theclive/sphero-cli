#!/usr/bin/env node

const sphero = require("sphero")

const spheroId = process.argv[2]
const orb = sphero(spheroId)

const streamData = require("./lib/dataStream")
const stdin = process.openStdin()

stdin.addListener("data", function(data) {

	let command = "orb." + data.toString().trim()

	try {
		let result = eval(command)
		console.log("[EXECUTING]: " + result)

	} catch(error) {
		console.log(error)
	}
})

orb.connect(() => {

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

orb.disconnect(() => {

});
