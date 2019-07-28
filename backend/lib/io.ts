import { Server } from 'http';
import socketIo from 'socket.io';

export default (http: Server) => {
    const io = socketIo(http, { path: '/socket.io' });

    io.on('connection', socket => {

        // console.log('a user connected');
        socket.emit('connected', { message: 'Server saw that user has connected' });
        // setInterval(() => {
        //     socket.emit('somemsg', { message: `Ping - ${Date.now()}` });
        // }, 5000);
    });
};
