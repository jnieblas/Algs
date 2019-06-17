const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

const spawn = require("child_process").spawn;

exports.index = function(req, res, next){
  res.render('sequence_form', { title: 'ア - SEQUENCE'});
};

exports.sequence_post = [
  // Custom validations, preventing unnecessary messages
  body('a').trim().custom(value => {
      var a = value;

      if(value.length === 0){
          return Promise.reject('a must be specified');
      } else{
          return true;
      }
  }),
  body('b').trim().custom(value => {
      var b = value;

      if(value.length === 0){
          return Promise.reject('b must be specified');
      } else{
          return true;
      }
  }),

  // Sanitize (escape) the a & b fields
  sanitizeBody('a').escape(),
  sanitizeBody('b').escape(),

  // Process request after validation and sanitization
  (req, res, next) => {

      // Extract the validation errors from a request.
      const errors = validationResult(req);

      const a = req.body.a;
      const b = req.body.b;

      if (!errors.isEmpty()) {
          // There are errors. Render form again with sanitized values/error messages.
          res.render('sequence_form', { title: 'ア - SEQUENCE',
              a: a, b: b, errors: errors.array()});
      }
      else {
          // get the result, pass to stdout
          // const sequence = spawn('java',["Driver", a, b], {cwd: "C:/Users/Hugh Mungus/WebstormProjects/Algs/" +
          // "algorithm_code/sequence/src/"});
          // sequence.stdout.on('data', (data) => {
          //     res.render('sequence_result', { title: 'ア - SEQUENCE RESULT',
          //         a: a, b, out: data});
          // });
          run_script('java', ["Driver", a, b],
          "C:/Users/Hugh Mungus/WebstormProjects/Algs/" +
          "algorithm_code/sequence/src/",
          function(output, exit_code) {
              res.render('sequence_result',{ title: 'ア - SEQUENCE RESULT',
                      a: a, b, out: output});
          });
        }
    }
];

// asynchronously runs the script
// Help from:
//  https://stackoverflow.com/questions/14332721/node-js-spawn-child-process-and-get-terminal-output-live
function run_script(command, args, dir, callback) {
  console.log("Starting Process.");
  var child = spawn(command, args, {cwd: dir});

  var out = "";

  child.stdout.setEncoding('utf8');
  child.stdout.on('data', function(data){
    console.log('stdout: ' + data);

    data=data.toString();
    out+=data;
  });

  child.stderr.setEncoding('utf8');
  child.stderr.on('data', function(data) {
    console.log('stderr: ' + data);

    data=data.toString();
    scriptOutput+=data;
  });

  // returns output & status as a callback
  child.on('close', function(code) {
    callback(out, code);
  });
}
