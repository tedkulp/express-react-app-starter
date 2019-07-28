import io from 'socket.io-client';
import ioWildcard from 'socketio-wildcard';
import _ from 'lodash';

import { getDispatch } from './store';

const socket = io('/');
const patch = ioWildcard(io.Manager);

patch(socket);

socket.on('*', msg => {
    const dispatch = getDispatch();
    const props = _.forOwn(msg.data[1], (v, k) => {
        return [k, v];
    });

    dispatch({
        ...props,
        type: `socket-action/${msg.data[0].toUpperCase()}`,
    });
});

export const init = () => {
    // no op
};

export default socket;
