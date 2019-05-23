const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

exports.index = function(req, res, next){
    res.render('karatsuba_form', { title: 'Karatsuba Calculator'});
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


        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/error messages.
            res.render('karatsuba_form', { title: 'Karatsuba Calculator',
                a: req.body.a, b: req.body.b, errors: errors.array()});
        }
        else {
            // Filler for now
            res.render('karatsuba_form', { title: 'Karatsuba Calculator'});
            // Data from form is valid.
            // Send a & b to Python Container
            // render form with descriptions
            // res.redirect(//new url);
        }
    }
];
