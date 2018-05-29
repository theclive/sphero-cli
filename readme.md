## Sphero CLI Tool

Test out and learn the commands from [Sphero's Official SDK](https://github.com/orbotix/sphero.js) in a CLI.

### Getting started

* Clone this repo
* `$ npm install`
* To run: `$ sudo ./starter.js XX:XX:XX:XX:XX`. On Linux the argument is the device's Mac address and on macOS it is the device ID. If your Sphero's device ID is not in the table below then ask us to help you find it :)

### Usage and reference

The connection to your Sphero is already established when launching the CLI. You therefore don't have to explicitly call the `sphero` (sometimes `orb` is also used) object when issuing commands. You can therefore just go `roll(100,0)` in the CLI.

Below are some of the commands available for the CLI:

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

#### List of our Sphero IDs:

| Sphero Label | Device name	  | MAC address       | Device ID                        |
| -------------| -------------- | ----------------- | -------------------------------- |
| A            | SK-5186        | F8:CC:A1:A7:51:86	| |
| B            | SK-7D19        | FF:AF:08:F6:7D:19	| |
| C            | SK-BEAD        | EB:76:90:85:BE:AD	| |
| D            | SK-40A2        | F5:77:55:BE:40:A2	| |
| E            | SK-C345        | E0:01:D9:64:C3:45	| |
| F            | SK-D4A7        | FA:34:A8:E7:D4:A7	| |
| G            | SK-0EC0        | FD:94:C6:CA:0E:C0	| |
| H            | SK-70C4        | E8:CC:F3:D0:70:C4	| |
| I            | SK-EC32        | C7:8A:28:6D:EC:32	| |
| J            | SK-76D8        | CB:68:ED:5F:76:D8	| |
| K            | SK-2368        | E6:EA:05:40:23:68	| |

<!--
  Have a look here for more commands: https://sdk.sphero.com/community-apis/javascript-sdk/
  getPowerState()
  sleep()
  getVoltageTripPoints() && setVoltageTripPoints()
  setInactivityTimeout()
  assignTime()
 -->

<!--example repl stuff:
to call function: getChassisId().then((a)=>console.log(a))
to see function definition getChassisId
-->

<!--
  THESE ARE FROM LOOKING INSIDE sphero.js

  setHeading            : 0x01,
  setStabilization      : 0x02,
  setRotationRate       : 0x03,
  setCreationDate       : 0x04,
  getBallRegWebsite     : 0x05,
  reEnableDemo          : 0x06,
  getChassisId          : 0x07,
  setChassisId          : 0x08,
  selfLevel             : 0x09,
  setVdl                : 0x0A,
  setDataStreaming      : 0x11,
  setCollisionDetection : 0x12,
  locator               : 0x13,
  setAccelerometer      : 0x14,
  readLocator           : 0x15,
  setRgbLed             : 0x20,
  setBackLed            : 0x21,
  getRgbLed             : 0x22,
  roll                  : 0x30,
  boost                 : 0x31,
  move                  : 0x32,
  setRawMotors          : 0x33,
  setMotionTimeout      : 0x34,
  setOptionsFlag        : 0x35,
  getOptionsFlag        : 0x36,
  setTempOptionFlags    : 0x37,
  getTempOptionFlags    : 0x38,
  getConfigBlock        : 0x40,
  setSsbParams          : 0x41,
  setDeviceMode         : 0x42,
  setConfigBlock        : 0x43,
  getDeviceMode         : 0x44,
  getSsb                : 0x46,
  setSsb                : 0x47,
  ssbRefill             : 0x48,
  ssbBuy                : 0x49,
  ssbUseConsumeable     : 0x4A,
  ssbGrantCores         : 0x4B,
  ssbAddXp              : 0x4C,
  ssbLevelUpAttr        : 0x4D,
  getPwSeed             : 0x4E,
  ssbEnableAsync        : 0x4F,
  runMacro              : 0x50,
  saveTempMacro         : 0x51,
  saveMacro             : 0x52,
  initMacroExecutive    : 0x54,
  abortMacro            : 0x55,
  macroStatus           : 0x56,
  setMacroParam         : 0x57,
  appendTempMacroChunk  : 0x58,
  eraseOBStorage        : 0x60,
  appendOBFragment      : 0x61,
  execOBProgram         : 0x62,
  abortOBProgram        : 0x63,
  answerInput           : 0x64,
  commitToFlash         : 0x65,
  commitToFlashAlias    : 0x70-->