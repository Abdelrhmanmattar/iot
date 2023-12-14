// code for server to connect to database

const express = require('express');
const { State } = require('./data_base');
const { open_SERVO, close_SERVO } = require('./public/motor');


const app = express();
const port = 3000;
const hostname = 'localhost';


app.use(express.json());







app.post('/open', (req, res) => {
    open_SERVO();

    const state = new State({ value: 1 });
    state.save((err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('state saved');
        }
    });
    res.send('DOOR opened');
    } );

app.post('/close', (req, res) => {
    close_SERVO();

    const state = new State({ value: 0 });
    state.save((err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('state saved');
        }
    });
    res.send('DOOR closed');
    } );

 app.listen(port, () => {
            console.log(`Server running on http://${hostname}:${port}/`);
      });