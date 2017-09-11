const getHTML = require('./http-functions');
const printHTML = require('./callbacks/printHTML');
const printUpperCase = require('./callbacks/print_uppercase');
const printLowerCase = require('./callbacks/print_lowercase');
const printReversed = require('./callbacks/print_reversed');
const print1337 = require('./callbacks/print_1337');

var requestOptions = {
    host: 'sytantris.github.io',
    path: ''
};

/*
 *  Print HTML to console
 * 
 */
// requestOptions.path = '/http-examples/step5.html';
// getHTML(requestOptions, printHTML);


/*
 *  Print Upper Case
 * 
 */
//  requestOptions.path = '/http-examples/step6/uppercase.html';
//  getHTML(requestOptions, printUpperCase);


/*
 *  Print Lower Case
 * 
 */
//  requestOptions.path = '/http-examples/step6/lowercase.html';
//  getHTML(requestOptions, printLowerCase);

/*
 *  Print 1337 Case
 * 
 */
//  requestOptions.path = '/http-examples/step6/1337.html';
//  getHTML(requestOptions, print1337);

