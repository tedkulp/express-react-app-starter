const passport = require('passport');
const { ExtractJwt, Strategy } = require('passport-jwt');
const userModel = require('./models').loadModel('user');

const params = {
    secretOrKey: process.env.JWT_ACCESS_CODE || '123456',
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

module.exports = () => {
    const strategy = new Strategy(params, (payload, done) => {
        userModel.findOne({ id: payload.id }, (_err, user) => {
            if (user) {
                return done(null, {
                    id: user.id,
                });
            }

            return done(new Error('User not found'), null);
        });
    });

    passport.use(strategy);

    return {
        initialize: () => {
            return passport.initialize();
        },
        authenticate: () => {
            return passport.authenticate('jwt', { session: false });
        },
    };
};
