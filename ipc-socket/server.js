const net = require('net');
const fs = require('fs');
const child_process = require('child_process');

// 1094867 per 10s ~ 100000 rps
let gotMessages = 0;
let buffer = '';
let connected = false;
let server = net.createServer((connection) => {
    // console.log('Socket connected');

    if (!connected) {
        setTimeout(() => {
            // console.log("Passed: ", gotMessages, " messages")
            process.send(gotMessages);
            process.exit();
        }, 10000);
        connected = true;
    }

    connection.on('data', (message) => {
        // pure data with out buffering message
        // console.log(message);
        // let completeDate = message.toString().split(':DEL:');
        // // console.log(completeDate);
        // for (let i = 0, len = completeDate.length; i < len; i++) {
        //     if ((i === len - 2 && completeDate[i + 1] !== '') || i === len - 1) {
        //         buffer = + completeDate[i]
        //         break;
        //     }
        //     gotFullMessage(buffer + completeDate[i]);
        //     buffer = '';
        // }
        // gotFullMessage();
        gotMessages++;
        connection.write(message);
    })
})

function gotFullMessage() {
    gotMessages++;
}

let path = 'myctl-ipc-channel';

// handle windows pip set up
if (process.platform === 'win32') {
    path = path.replace(/^\//, '');
    path = path.replace(/\//g, '-');
    path = `\\\\.\\pipe\\${this.path}`;
}

// fs.existsSync(path) && fs.unlinkSync(path);

server.on('error', (err) => {
    console.log(err);
});

server.listen(3000, () => {
    console.log("IPC Socket Server is running", ' pid: ', process.pid);
    for (let i = 0; i < 10; i++) {
        child_process.fork(__dirname + '/client.js')
    }
});