const getHTML = require('./http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
};

function printHTML(data) {
    console.log(data);
}

getHTML(requestOptions, printHTML);