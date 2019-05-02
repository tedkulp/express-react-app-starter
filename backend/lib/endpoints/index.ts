import * as fs from 'fs';

export const init = app => {
    const files = fs.readdirSync(__dirname);

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
