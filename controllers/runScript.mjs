/* Asynchronously runs a given script
 * Command = language command (java, python, etc.)
 * args = list of arguments
 * dir = location of the script
 * callback = function responsible for rendering the data
 *
 * NOTE - Help from:
 *     https://stackoverflow.com/questions/14332721/
 *           node-js-spawn-child-process-and-get-terminal-output-live
 */
module.exports = {
  run_script: function(command, args, dir, callback) {
    console.log("Starting Process.");
    var child = spawn(command, args, {cwd: dir});

    var out = "";

    child.stdout.setEncoding('utf8');
    child.stdout.on('data', function(data){
      // console.log('stdout: ' + data);

      data = data.toString();
      var lines = data.split(/(\r?\n)/g);
      //console.log("lines: " + lines);
      out += data;
    });

    // child.stderr.setEncoding('utf8');
    child.stderr.on('data', function(data) {
      console.log('stderr: ' + data);

      data = data.toString();
      out += data;
    });

    // returns output & status as a callback
    child.on('close', function(code) {
      callback(out, code);
    });
  }
};
