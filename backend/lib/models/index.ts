import * as fs from 'fs';

const models = {};
const schemas = {};

(() => {
    const files = fs.readdirSync(__dirname);

    files.forEach(fileName => {
        fileName = fileName.replace('.ts', '');

        if (fileName !== 'index') {
            // eslint-disable-next-line global-require, import/no-dynamic-require
            const { model, schema } = require(`./${fileName}`);

            models[fileName] = model;
            schemas[fileName] = schema;
        }
    });
})();

export const init = () => {
    return;
};

export const loadModel = name => {
    return models[name];
};

export const loadSchema = name => {
    return schemas[name];
};

export default {
    init,
    loadModel,
    loadSchema,
};
