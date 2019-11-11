import io from 'socket.io-client';

export default (url, cb) => {
    const socket = io(url);
    socket.on('connect', () => cb(socket))
}
