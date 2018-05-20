// outputs device sensor data to console
// piping this to redis would be super useful!

module.exports =
{
    stream: function(data) {
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
    }
}
