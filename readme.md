
## Sphero CLI Tool

Test out and learn the commands from [Sphero's Official SDK](https://github.com/orbotix/sphero.js) in a CLI!



### Getting Started

* Clone this repo
* `$ npm install`
* To run: `$ sudo ./starter.js XX:XX:XX:XX:XX`. On Linux the argument is the device's MAC address and on macOS it is the Device ID. If your Sphero's Device ID is not in the table below then ask us to help you find it :)

#### List of our Sphero IDs:

| Sphero Label | Device name	  | MAC address       | Device ID                        |
| -------------| -------------- | ----------------- | -------------------------------- |
| A            | SK-5186        | F8:CC:A1:A7:51:86	| |
| B            | SK-7D19        | FF:AF:08:F6:7D:19	| |
| C            | SK-BEAD        | EB:76:90:85:BE:AD	| 38a2cd60b8f14032896de2c9739d5ffe |
| D            | SK-40A2        | F5:77:55:BE:40:A2	| |
| E            | SK-C345        | E0:01:D9:64:C3:45	| |
| F            | SK-D4A7        | FA:34:A8:E7:D4:A7	| |
| G            | SK-0EC0        | FD:94:C6:CA:0E:C0	| |
| H            | SK-70C4        | E8:CC:F3:D0:70:C4	| |
| I            | SK-EC32        | C7:8A:28:6D:EC:32	| |
| J            | SK-76D8        | CB:68:ED:5F:76:D8	| |
| K            | SK-2368        | E6:EA:05:40:23:68	| |
| L            | SK-E1F8        | C2:92:5C:11:E1:F8	| |
| O            | SK-5FCA        | F4:C3:EB:77:5F:CA	| |
| P            | SK-E8F5        | C1:EA:BB:43:E8:F5 | |

<!-- | M            | SK-E1F8        | C2:92:5C:11:E1:F8	| 5cb4cdd41c1b4b0b8b5b0c185458b31b | -->

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

* Roll Sphero:
`roll(speed, direction)`

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
