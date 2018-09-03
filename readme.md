
## Sphero CLI Tool

Test out and learn the commands from [Sphero's Official SDK](https://github.com/orbotix/sphero.js) in a CLI!



### Getting Started

* Clone this repo
* `$ npm install`
* To run: `$ sudo ./starter.js XX:XX:XX:XX:XX`. On Linux the argument is the device's MAC address and on macOS it is the Device ID. If your Sphero's Device ID is not in the table below then ask us to help you find it :)

#### List of our Sphero IDs:

These can be found in the [info and tips document](https://github.com/OfferZen-Make/make-robots-iot/blob/master/info_and_tips.md).

### Commands and Usage
The connection to your Sphero is already established when launching the CLI. You therefore don't have to explicitly call the `sphero` (sometimes `orb` is also used) object when issuing commands. You can therefore just go `roll(100,0)` in the CLI.

If you would like to see the source code of any of the commands, simply enter the command in the CLI and omit the brackets. For example, if you would like to know what the `setHeading()` command requires as params and what it returns, then simply enter the following in the CLI:

`setHeading`

Which returns the following:

```c
function (heading, callback) {
  heading = utils.intToHexArray(heading, 2);
  return command(commands.setHeading, heading, callback);
}
```


##### Sphero Commands with Description

Below is our own documentation for controlling Sphero. Alternatively, you can look at [the SDK's examples](https://github.com/orbotix/sphero.js/tree/master/examples) or at the [Javascript API in the official docs](https://sdk.sphero.com/community-apis/javascript-sdk/).

* Roll Sphero:
`roll(distance, direction)`

* Change Sphero's motion time-out value (in milliseconds):
`setMotionTimeout(2000)`
Sphero won't roll forever! It'll roll as long as you tell it to :)


* Change color:
`color('some_color')`

* Set motors independently:
`setRawMotors({lmode: 0x01, lpower: 100, rmode: 0x01, rpower: 100})`
The above serves as an example of the command. For each of the left and right motors you specify the <i>mode</i> (see below) and the <i>power</i> (0-255). Here are the available modes:
  * `0x00`: Off (motor is open circuit)
  * `0x01`: Forward
  * `0x02`: Reverse
  * `0x03`: Brake (motor is shorted)
  * `0x04`: Ignore (motor mode and power is left unchanged


* The following commands will stream sensor data to the console:
  * `streamOdometer()`
  * `streamImuAngles()`
  * `streamGyroscope()`
  * `streamVelocity()`
  * `streamAccelerometer()`
  * `streamAccelOne()`
  * `streamMotorsBackEmf()`

##### All the other Commands (almost)

There are many, many commands available to you through the SDK. We've described the most useful commands first, but feel free to experiment with the list below:

<!-- Below is from /lib/commands/sphero.js -->
```
  setHeading
  setStabilization
  setRotationRate
  getChassisId
  setChassisId
  selfLevel
  setDataStreaming
  configureCollisions
  configureLocator
  setAccelRange
  readLocator
  setRgbLed
  setBackLed
  getRbgLed
  boost
  setMotionTimeout
  setPermOptionFlags
  setTempOptionFlags
  getTempOptionFlags
  getConfigBlock
  _setSsbBlock
  setSsbModBlock
  setDeviceMode
  getSsb
  setSsb
  refillBank
  buyConsumable
  useConsumable
  grantCores
  _xpOrLevelUp
  addXp
  levelUpAttr
  getPasswordSeed
  enableSsbAsyncMsg
  runMacro
  saveTempMacro
  saveMacro
  reInitMacroExec
  abortMacro
  getMacroStatus
  setMacroParam
  appendMacroChunk
  eraseOrbBasicStorage
  appendOrbBasicFragment
  executeOrbBasicProgram
  abortOrbBasicProgram
  submitValueToInput
  commitToFlash
  _commitToFlashAlias
```

<!--
  Have a look here for more commands: https://sdk.sphero.com/community-apis/javascript-sdk/
  getPowerState()
  sleep()
  getVoltageTripPoints() && setVoltageTripPoints()
  setInactivityTimeout()
  assignTime()
 -->
