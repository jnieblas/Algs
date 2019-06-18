const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

const spawn = require("child_process").spawn;

exports.index = function(req, res, next){
    res.render('karatsuba_form', { title: 'アルゴス - KARATSUBA'});
};

exports.karatsuba_post = [
    // Custom validations, preventing unnecessary messages
    body('a').trim().custom(value => {
        var a = Number(value);

        if(value.length === 0){
            return Promise.reject('a must be specified');
        } else if(isNaN(a) || ((a%1)!== 0)){
            return Promise.reject('a must be an integer');
        } else{
            return true;
        }
    }),
    body('b').trim().custom(value => {
        var b = Number(value);

        if(value.length === 0){
            return Promise.reject('b must be specified');
        } else if(isNaN(b) || ((b%1) !== 0)){
            return Promise.reject('b must be an integer');
        }
        else{
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
            res.render('karatsuba_form', { title: 'アルゴス - KARATSUBA',
                a: a, b: b, errors: errors.array()});
        }
        else {

            // get the result, pass to stdout
            const karatsuba = spawn('python',["C:/Users/Hugh Mungus/WebstormProjects/Algs/" +
            "algorithm_code/karatsuba/src/karatsuba.py", a, b]);
            karatsuba.stdout.on('data', (data) => {
                res.render('karatsuba_result', { title: 'アルゴス - KARATSUBA RESULT',
                    a: a, b, out: data});
            });
        }
    }
];
