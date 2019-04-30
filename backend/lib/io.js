const socketIo = require('socket.io');

module.exports = http => {
    const io = socketIo(http, { path: '/socket.io' });

    io.on('connection', socket => {
        console.log('a user connected');
        socket.emit('somemsg', { message: 'Hi' });
    });
};
