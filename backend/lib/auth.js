const passport = require("passport");  
const passportJWT = require("passport-jwt");
const userModel = require('./models').loadModel('user');
const ExtractJwt = passportJWT.ExtractJwt;  
const Strategy = passportJWT.Strategy;  
const params = {  
    secretOrKey: process.env.JWT_ACCESS_CODE || '123456',
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

module.exports = function() {  
    const strategy = new Strategy(params, function(payload, done) {
        userModel.findOne({id: payload.id}, (err, user) => {
            if (user) {
                return done(null, {
                    id: user.id
                });
            } else {
                return done(new Error("User not found"), null);
            }
        });
    });
    passport.use(strategy);
    return {
        initialize: function() {
            return passport.initialize();
        },
        authenticate: function() {
            return passport.authenticate("jwt", { session: false });
        }
    };
};