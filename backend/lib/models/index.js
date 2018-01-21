// Get the main express app instance
const fs = require('fs');

let models = {};
let schemas = {};

(() => {
    let files = fs.readdirSync(__dirname);

    files.forEach(fileName => {
        fileName = fileName.replace('.js', '');
        if (fileName !== 'index') {
            let { model, schema } = require('./' + fileName);
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
