/**
 * MeetupsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    meetups: async function (req, res) {
        var meetups = await Meetups.find({});

        res.send(meetups);
    }

};

