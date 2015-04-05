
var mraa = require('mraa');

console.log('MRAA Version: ' + mraa.getVersion());

var myOnboardLed = new mraa.Gpio(37);
myOnboardLed.dir(mraa.DIR_OUT);

var ledState = false;

console.log("Led state = " + ledState);

function turnOn() {

    console.log("turnOn");

    if (ledState != true) {
        ledState = !ledState;

        myOnboardLed.write(ledState?1:0);
    }

}

function turnOff() {

    console.log("turnOff");

    if (ledState != false) {
        ledState = !ledState;

        myOnboardLed.write(ledState?1:0);
    }
}


exports.turnOn = turnOn;
exports.turnOff = turnOff;