module.exports = (http => {
    const io = require('socket.io')(http, {path: '/socket.io'});

    io.on('connection', function (socket) {
        console.log('a user connected');
        socket.emit('somemsg', 'Hi');
    });
});