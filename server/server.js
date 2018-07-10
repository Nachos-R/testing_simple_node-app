const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page Not Found!',
        name: 'Todo app'
    });
});

app.get('/users', (req, res) => {
    res.send([
        {
            name: 'Yura',
            age: 22
        },
        {
            name: 'Jonny',
            age: 27
        }
    ]);
});

app.listen(3000);

module.exports.app = app;