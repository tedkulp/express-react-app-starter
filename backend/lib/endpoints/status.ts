import { Router } from 'express';
import Auth from '../auth';

export const router = Router();
const auth = Auth();

router.get('/status', (_req, res) => {
    res.send('OK');
});

router.get('/protected', auth.authenticate(), (_req, res) => {
    res.send('OK');
});

export default {
    router,
};
