import { Application, json } from 'express';
import * as fs from 'fs';

export const init = (app: Application) => {
    const files = fs.readdirSync(__dirname);

    app.use(json());

    files.forEach(fileName => {
        if (fileName !== 'index.ts') {
            // eslint-disable-next-line global-require, import/no-dynamic-require
            const { router } = require(`./${fileName}`);
            app.use('/api', router);
        }
    });
};

export default {
    init,
};
