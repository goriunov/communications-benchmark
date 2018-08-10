const child_process = require('child_process');

let numberOfRun = 10;
let ipcTestResults = []
let ipcSocketTestResults = []
let uwsTestResult = []
function ipcTest() {
    numberOfRun--
    let IPCProcess = child_process.fork(__dirname + '/ipc/server.js');
    IPCProcess.on('message', (message) => {
        ipcTestResults.push(message);
        if (numberOfRun) {
            ipcTest();
        } else {
            numberOfRun = 10;
            uwsTest();   
        }

    })
}


function uwsTest() {
    numberOfRun--
    let UWSProcess = child_process.fork(__dirname + '/uws/server.js');
    UWSProcess.on('message', (message) => {
        uwsTestResult.push(message);
        if (numberOfRun) {
            uwsTest();
        } else {
            numberOfRun = 10;
            ipcSocketTest();
        }

    })
}

function ipcSocketTest() {
    numberOfRun--
    let IPCProcess = child_process.fork(__dirname + '/ipc/server.js');
    IPCProcess.on('message', (message) => {
        ipcSocketTestResults.push(message);
        if (numberOfRun) {
            ipcSocketTest();
        } else {
            console.log('IPC: ', ipcTestResults)
            console.log('IPC Socket: ', ipcTestResults)
            console.log('UWS: ', uwsTestResult)  
        }

    })
}

ipcTest();


