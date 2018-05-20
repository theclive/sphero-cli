## Sphero CLI Tool

Test out and learn the commands from [Sphero's Official SDK](https://github.com/orbotix/sphero.js) in a CLI.

### Getting started

* Clone this repo
* `$ npm install`
* To run: `$ sudo ./starter.js XX:XX:XX:XX:XX`, where the argument is your device ID.

### Usage and reference

The connection to your Sphero is already established when launching the CLI. You therefore don't have to explicitly call the `sphero` (sometimes `orb` is also used) object when issuing commands. You can therefore just go `roll(100,0)` in the CLI.

Below are the commands available for the CLI:

* Roll Sphero:
`roll(speed, direction)`

* Change color:
`color("some_color")`

* The following commands will stream sensor data to the console:
```
streamOdometer()
streamImuAngles()
streamGyroscope()
streamVelocity()
streamAccelerometer()
streamAccelOne()
streamMotorsBackEmf()
```


<!--example repl stuff:
getChassisId().then((a)=>console.log(a))-->


<!--setHeading            : 0x01,
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