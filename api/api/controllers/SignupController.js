/**
 * SignupController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    signup: async function (req, res) {
        if (req.body.email && req.body.password && req.body.firstname && req.body.lastname) {
            // Good to proceed

            // We must check for email if another user is already using it
            var count = await Users.count({ email: req.body.email });

            if (count === 0) {
                await Users.create({
                    email: req.body.email,
                    password: req.body.password,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname
                });

                res.ok();
            } else {
                res.badRequest('Email already exists');
            }
        } else {
            res.badRequest();
        }
    }

};

