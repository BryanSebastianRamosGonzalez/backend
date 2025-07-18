const mongoose = require('mongoose');

const user = require ('./src/models/users');

mongoose.connect('mongodb://localhost:27017/uuarios', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Mongodb is connected');
}).catch((error) => console.log(error));