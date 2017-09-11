const https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
};

function getAndPrintHTML(options) {
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
            console.log(tmpData);
            console.log('Response stream complete.');
        });

    });

}

getAndPrintHTML(requestOptions);