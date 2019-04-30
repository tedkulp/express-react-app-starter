// Get the main express app instance
const fs = require('fs');

const models = {};
const schemas = {};

(() => {
    const files = fs.readdirSync(__dirname);

    files.forEach(fileName => {
        fileName = fileName.replace('.js', '');

        if (fileName !== 'index') {
            // eslint-disable-next-line global-require, import/no-dynamic-require
            const { model, schema } = require(`./${fileName}`);

            models[fileName] = model;
            schemas[fileName] = schema;
        }
    });
})();

module.exports = {
    loadModel: name => {
        return models[name];
    },
    loadSchema: name => {
        return schemas[name];
    },
};
