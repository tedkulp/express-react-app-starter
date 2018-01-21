const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(`mongodb://${process.env('DOCKER_MONGODB_HOST')}/starter`);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected');
});

module.exports.db = db;
module.exports.mongoose = mongoose;
