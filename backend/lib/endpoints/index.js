// Get the main express app instance
const fs = require('fs');

const importAll = app => {
    let files = fs.readdirSync(__dirname);

    files.forEach(fileName => {
        if (fileName !== 'index.js') {
            app.use('/api', require('./' + fileName));
        }
    });
};

module.exports = importAll;
