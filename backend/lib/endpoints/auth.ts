import { compare } from 'bcryptjs';
import { Response, Router } from 'express';
import { first, get } from 'lodash';

import { generateToken } from '../auth';
import { IUserModel, userModel } from '../models/user';

export const router = Router();

const sendInvalidUserOrPw = (res: Response) => {
    res.status(401);
    res.send('Invalid user or password');
}

router.post('/login', (req, res) => {
    return userModel
        .find({ username: get(req.body, 'username') })
        .then((foundModels: IUserModel[]) => {
            const user = first(foundModels);
            if (user) {
                const cryptedPw = get(user, 'password');
                return compare(get(req.body, 'password'), cryptedPw).then((pwMatched: boolean) => {
                    if (pwMatched) {
                        const data = {
                            id: get(user, 'id'),
                            username: get(user, 'username'),
                        };

                        res.send({
                            token: generateToken(data),
                            ...data,
                        });
                    } else {
                        sendInvalidUserOrPw(res);
                    }
                });
            } else {
                sendInvalidUserOrPw(res);
            }
        });
});

export default {
    router,
};
