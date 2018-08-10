const uws = require('uws');
const child_process = require('child_process');

let server = new uws.Server({
    port: 3000
}, () => {
    console.log("UWS server is running ", ' pid: ', process.pid);
    for (let i = 0; i < 10; i++) {
        child_process.fork(__dirname + '/client.js');
    }
});

let gotMessages = 0;
let connected = false;
server.on('connection', (socket) => {
    if (!connected) {
        setTimeout(() => {
            process.send(gotMessages);
            process.exit();
        }, 10000);
        connected = true
    }

    socket.on('message', (message) => {
        socket.send(message);
        gotMessages++
    })
})