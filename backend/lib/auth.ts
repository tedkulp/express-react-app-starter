import { encode } from 'jwt-simple';
import passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { IUserModel, userModel } from './models/user';

const opts = {
    secretOrKey: process.env.JWT_ACCESS_CODE || '123456',
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

export const generateToken = (data: any) => {
    return encode(data, opts.secretOrKey);
};

export default () => {
    const strategy = new Strategy(opts, (payload, done) => {
        userModel.findOne({ id: payload.sub }, (_err: any, user?: IUserModel) => {
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
