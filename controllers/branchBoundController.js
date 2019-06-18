const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const spawn = require("child_process").spawn;
const runScript = require('./runScript.mjs');

exports.index = function(req, res, next){
  res.render('branch_bound_form', { title: 'アルゴス - BRANCH & BOUND'});
};

exports.branch_bound_post = [
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
          res.render('branch_bound_form', { title: 'アルゴス - BRANCH & BOUND',
              a: a, b: b, errors: errors.array()});
      }
      else {
          runScript.run_script('java', ["Driver", a, b],
          "C:/Users/Hugh Mungus/WebstormProjects/Algs/" +
          "algorithm_code/sequence/src/",
          function(output, exit_code) {
              res.render('branch_bound_result',{ title: 'アルゴス - BRANCH & BOUND RESULT',
                      a: a, b: b, out: output});
          });
        }
    }
];
