//database code for the app

const mongoose = require('mongoose');

const dbConnectionStr = 'mongodb://localhost:27017/iot_motor';


mongoose.connect(dbConnectionStr, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const state = new mongoose.Schema({
  value: Number,
});

const State = mongoose.model('State', state);

module.exports = { State};