const cors = require('cors');
const express = require('express');

const coup = express();
coup.use(cors());

const http = require('http').Server(coup);
const io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:4200']
  }
});

const port = process.env.PORT || 3000;

let players = [{name: 'Opponent 1', coins: 4},
               {name: 'Opponent 2', coins: 3},
               {name: 'Opponent 3', coins: 2},
               {name: 'Opponent 4', coins: 5}
              ];

io.on('connection', (socket) => {

    console.log('user connected');

    socket.on('message', (msg) => {
      console.log('message: ' + msg.name);
      socket.emit('response', 'message received');
    });

    socket.on('load', () => {
      socket.emit('players', players);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
});

http.listen(port, () => {
    console.log(`started on port: ${port}`);
});
