let mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect({
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true, // Add this option to remove deprecation warning
})
    .then(()=>{
        console.log('Database connection successful!')
    })
    .catch((err)=>{
        console.log(err)
    })


module.exports = new Database();
