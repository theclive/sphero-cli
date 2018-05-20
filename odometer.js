// outputs device sensor data to console
// piping this to redis would be super useful!

module.exports =
{
    stream: function(data) {
		console.log("odometer:");
		console.log("  sensor:", data.xOdometer.sensor);
		console.log("    range:", data.xOdometer.range);
		console.log("    units:", data.xOdometer.units);
		console.log("    value:", data.xOdometer.value[0]);

		console.log("  sensor:", data.yOdometer.sensor);
		console.log("    range:", data.yOdometer.range);
		console.log("    units:", data.yOdometer.units);
		console.log("    value:", data.yOdometer.value[0]);
    }
}
