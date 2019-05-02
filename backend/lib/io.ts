import * as socketIo from 'socket.io';

export default http => {
    const io = socketIo(http, { path: '/socket.io' });

    io.on('connection', socket => {
        console.log('a user connected');
        socket.emit('somemsg', { message: 'Hi' });
    });
};
