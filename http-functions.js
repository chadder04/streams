module.exports = function getHTML(options, cb) {
    const https = require('https');
    let tmpData = '';

    https.get(options, function (response) {
        // set encoding of received data to UTF-8
        response.setEncoding('utf8');

        // the callback is invoked when a `data` chunk is received
        response.on('data', function (data) {
            tmpData += data;
        });

        // the callback is invoked when all of the data has been received
        // (the `end` of the stream)
        response.on('end', function () {
            cb(tmpData);
            console.log('Response stream complete.');
        });

    });
};