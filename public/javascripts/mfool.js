/*jslint browser: true, devel: true, nomen: true */
/*global console */

(function () {
    'use strict';

    var User = function (config) {
        this.email = config.email;
        this.firstName = config.firstName;
        this.last_name = config.lastName;
        this.registrationDate = new Date();

        console.log('[User instantiated] %s', this.email);
        return this;
    };

    User.prototype = {
        constructor: User,

        save: function () {
            var emailRegExp = /^.+@fool.com$/;
            if (emailRegExp.test(this.email)) {
                console.log('I have successfully pretended to save %s :)', this.email);
            } else {
                console.log('I am sorry, but only admins saved. It does not appear %s is a fool.com email address.', this.email);
            }

            return this;
        }

    };

    var steve = new User({
            email: 'steve@fool.com'
        }),
        matt = new User({
            email: 'matt@dodson.com'
        });

    steve.save();
    matt.save();

}());
