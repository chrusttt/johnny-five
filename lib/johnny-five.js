/*
 * johnny-five
 * https://github.com/rwldrn/johnny-five
 *
 * Copyright (c) 2012 Rick Waldron <waldron.rick@gmail.com>
 * Licensed under the MIT license.
 */

[
  "Accelerometer",
  "Board",
  "Button",
  "Compass",
  "Fn",
  "Gripper",
  "IR",
  "LCD",
  "Led",
  "LedControl",
  "Joystick",
  "Motor",
  "Ping",
  "Pir",
  // "PWMServo",
  "Repl",
  "Sensor",
  "Servo",
  "ShiftRegister",
  "Sonar",
  "Wii",
  "Piezo"

  // TODO:
  // Switch
  // GPS

].forEach(function( constructor ) {
  var filepath = "../lib/" + constructor.toLowerCase();

  if ( constructor ) {
    module.exports[ constructor ] = require( filepath );
  }
});


// Customized constructors
//
module.exports.Magnetometer = function() {
  return new module.exports.Compass({
    device: "HMC5883L",
    freq: 100,
    gauss: 1.3
  });
};

module.exports.IR.Proximity = function( model ) {
  return new module.exports.IR({
    device: model || "GP2Y0D805Z0F",
    freq: 50
  });
};

module.exports.IR.Reflect = function( model ) {
  return new module.exports.IR({
    device: model || "QRE1113GR",
    freq: 50
  });
};

module.exports.IR.Motion = function( opt ) {
  return new module.exports.Pir(
    typeof opt === "number" ? opt : (
      opt.pin === undefined ? 7 : opt.pin
    )
  );
};


// Short-handing, Aliases
module.exports.Servos = module.exports.Servo.Array;
module.exports.Leds = module.exports.Led.Array;


// Back Compat
module.exports.Nunchuk = module.exports.Wii.Nunchuk;
