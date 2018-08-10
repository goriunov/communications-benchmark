const net = require('net');

// let path = 'ws://127.0.0.1:3000';

// handle windows pip set up
if (process.platform === 'win32') {
    path = path.replace(/^\//, '');
    path = path.replace(/\//g, '-');
    path = `\\\\.\\pipe\\${this.path}`;
}

let message = Buffer.from(`Rc8rghWRhEA9cVzPasoF4zmPA8xff2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiORc8rghWRhEA9cVzPasoF4zmPA8xff
2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiORc8rghWRhEA9cVzPasoF4zmPA8xff2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiORc8rghWRhEA9cVzP
asoF4zmPA8xff2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiORc8rghWRhEA9cVzPasoF4zmPA8xff2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiO
Rc8rghWRhEA9cVzPasoF4zmPA8xff2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiORc8rghWRhEA9cVzPasoF4zmPA8xff
2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiORc8rghWRhEA9cVzPasoF4zmPA8xff2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiORc8rghWRhEA9cVzP
asoF4zmPA8xff2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiORc8rghWRhEA9cVzPasoF4zmPA8xff2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiO
Rc8rghWRhEA9cVzPasoF4zmPA8xff2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiORc8rghWRhEA9cVzPasoF4zmPA8xff
2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiORc8rghWRhEA9cVzPasoF4zmPA8xff2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiORc8rghWRhEA9cVzP
asoF4zmPA8xff2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiORc8rghWRhEA9cVzPasoF4zmPA8xff2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiO
Rc8rghWRhEA9cVzPasoF4zmPA8xff2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiORc8rghWRhEA9cVzPasoF4zmPA8xff
2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiORc8rghWRhEA9cVzPasoF4zmPA8xff2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiORc8rghWRhEA9cVzP
asoF4zmPA8xff2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiORc8rghWRhEA9cVzPasoF4zmPA8xff2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiO
Rc8rghWRhEA9cVzPasoF4zmPA8xff2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiORc8rghWRhEA9cVzPasoF4zmPA8xff
2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiORc8rghWRhEA9cVzPasoF4zmPA8xff2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiORc8rghWRhEA9cVzP
asoF4zmPA8xff2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiORc8rghWRhEA9cVzPasoF4zmPA8xff2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiO
Rc8rghWRhEA9cVzPasoF4zmPA8xff2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiORc8rghWRhEA9cVzPasoF4zmPA8xff
2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiORc8rghWRhEA9cVzPasoF4zmPA8xff2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiORc8rghWRhEA9cVzP
asoF4zmPA8xff2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiORc8rghWRhEA9cVzPasoF4zmPA8xff2yphui2o5YQJUlk4H8VQK7pZkrYorNsrIiO:`);

let socket = net.connect(3000, '127.0.0.1');

socket.on('connect', () => {
    socket.write(message);
})

socket.on('data', () => {
    socket.write(message)
})

process.on('uncaughtException', () => {
    process.exit();
})