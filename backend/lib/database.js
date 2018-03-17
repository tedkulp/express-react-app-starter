const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(`mongodb://${process.env.DOCKER_MONGODB_HOST || '127.0.0.1'}/${process.env.DOCKER_MONGODB_DATABASE || 'example'}`);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected');
});

module.exports.db = db;
module.exports.mongoose = mongoose;
