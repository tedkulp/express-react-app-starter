import io from 'socket.io-client';
import _ from 'lodash';

import { dispatch } from '../components/store';

const socket = io('/');
const patch = require('socketio-wildcard')(io.Manager);
patch(socket);

socket.on('*', (msg) => {
  var props = _.forOwn(msg.data[1], (v, k) => {
    return [k, v];
  });
  dispatch({
    ...props,
    type: `socket-action/${msg.data[0].toUpperCase()}`,
  });
});

export default socket;
