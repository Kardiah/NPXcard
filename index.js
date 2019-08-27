#!/usr/bin/env node

const { render } = require('prettyjson')
const data = require('./lib/data')

const renderOpts = {
  dashColor: 'cyan',
  keysColor: 'magenta',
  stringColor: 'white'
}

module.exports = ({ json }) => json ? JSON.stringify(data) : render(data, renderOpts)


var figlet = require('figlet');

figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
