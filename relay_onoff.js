// JavaScript source code
exports.OnOff = function (pin, val) {
    var spawn = require('child_process').spawn;
    console.log('PIN:' + pin + 'VALUE:' + val);
    //var python = spawn('python', ['relay_onoff.py', pin, val]);
    //python.on('close', function (code) {
    //    console.log('Child process exited with code ' + code);
    //});
}