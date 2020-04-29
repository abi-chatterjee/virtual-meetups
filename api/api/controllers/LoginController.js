/**
 * LoginController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  auth: async function (req, res) {
      if (req.body.email && req.body.password) {
          // Good request, proceed
        var user = await Users.findOne({ email: req.body.email, password: req.body.password });
        if (user) {
            // OK, user exists
            delete user.password;
            res.send(user);
        } else {
            res.notFound();
        }
      } else {
          res.badRequest();
      }
  }

};

