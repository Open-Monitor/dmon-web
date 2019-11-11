import io from 'socket.io-client';

export default (url, cb) => {
    const socket = io(url);
    console.log(socket);
    socket.on('connect', () => cb(socket))
}
