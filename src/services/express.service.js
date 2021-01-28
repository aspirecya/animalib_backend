const express = require('express');
const config = require('../configs/server.config');
const bodyParser = require('body-parser');
const apiRouter = require('../routes');

// start express
const app = express();

// middleware init
app.use(bodyParser.json());

// routes
app.use('/api/v1', apiRouter);

// cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

exports.start = () => {
    let port = config.port;

    app.listen(port, (err) => {
        if(err) {
            console.log(`Error: ${err}`);
            process.exit(-1);
        }
    })
};