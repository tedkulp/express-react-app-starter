const fs = require('fs');

const importAll = app => {
    const files = fs.readdirSync(__dirname);

    files.forEach(fileName => {
        if (fileName !== 'index.js') {
            // eslint-disable-next-line global-require, import/no-dynamic-require
            const { router } = require(`./${fileName}`);

            app.use('/api', router);
        }
    });
};

module.exports = importAll;
