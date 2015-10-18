var spawn = require('child_process').spawn;
var python = spawn('python', ['alert.py']);
python.on('close', function (code) {
  console.log('Child process exited with code ' + code);
});
