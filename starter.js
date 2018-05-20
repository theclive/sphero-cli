#!/usr/bin/env node
var sphero = require("sphero");
// var spheroId = 'C2:92:5C:11:E1:F8';
var spheroId = process.argv[2];
var orb = sphero(spheroId);

var stdin = process.openStdin()
stdin.addListener("data", function(data) {
	var command = "orb." + data.toString().trim()
	try {
		var result = eval(command)
		console.info(typeOf(result))
		console.log("[EXECUTING]: " + result)
	} catch(error) {}
	// example repl stuff:
	// getChassisId().then((a)=>console.log(a))
})

orb.connect(function() {
	console.log("connected... waiting for input:")

	// orb.streamImuAngles();

	orb.on("imuAngles", function(data) {
		console.log("imuAngles:");
		console.log("  sensor:", data.pitchAngle.sensor);
		console.log("    range:", data.pitchAngle.range);
		console.log("    units:", data.pitchAngle.units);
		console.log("    value:", data.pitchAngle.value[0]);

		console.log("  sensor:", data.rollAngle.sensor);
		console.log("    range:", data.rollAngle.range);
		console.log("    units:", data.rollAngle.units);
		console.log("    value:", data.rollAngle.value[0]);

		console.log("  sensor:", data.yawAngle.sensor);
		console.log("    range:", data.yawAngle.range);
		console.log("    units:", data.yawAngle.units);
		console.log("    value:", data.yawAngle.value[0]);
	});


	// orb.streamOdometer()
	orb.on("odometer", function(data) {
		console.log("odometer:");
		console.log("  sensor:", data.xOdometer.sensor);
		console.log("    range:", data.xOdometer.range);
		console.log("    units:", data.xOdometer.units);
		console.log("    value:", data.xOdometer.value[0]);

		console.log("  sensor:", data.yOdometer.sensor);
		console.log("    range:", data.yOdometer.range);
		console.log("    units:", data.yOdometer.units);
		console.log("    value:", data.yOdometer.value[0]);
	})
	// orb.roll(100,20);
  // orb.color("green");
})
