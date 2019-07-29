var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var Request = require('request');

app.get('/', function (req, res) {
    res.send(JSON.stringify({ Hello: 'World' }));
});

app.get('/data', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    Request.get(`https://jobs.github.com/positions.json`, { json: true }, (err, response, body) => {
        if (err) { 
            return res.status(400).send({
                message: "Some error occoured"
            })
        }

        if (!body) {
            return res.status(404).send({
                message: "Note not found "
            });
        }
        res.send(body);
    });
})

app.get('/joblisting', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    Request.get(`https://jobs.github.com/positions.json?description=python&location=newyork`, { json: true }, (err, response, body) => {
        if (err) { 
            return res.status(400).send({
                message: "Some error occoured"
            })
        }

        if (!body) {
            return res.status(404).send({
                message: "Note not found "
            });
        }
        res.send(body);
    });
})


app.get('/joblistingByDesc', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    Request.get(`https://jobs.github.com/positions.json?description=python&location=`, { json: true }, (err, response, body) => {
        if (err) { 
            return res.status(400).send({
                message: "Some error occoured"
            })
        }

        if (!body) {
            return res.status(404).send({
                message: "Note not found "
            });
        }
        res.send(body);
    });
})


app.get('/joblisting/:desc/:location', (req, res) => {
    console.log('Success VN!!');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    Request.get(`https://jobs.github.com/positions.json?description=${req.params.desc}&location=${req.params.location}`, { json: true }, (err, response, body) => {
        if (err) { 
            return res.status(400).send({
                message: "Some error occoured"
            })
        }

        if (!body) {
            return res.status(404).send({
                message: "Note not found "
            });
        }
        res.send(body);
    });
})

app.listen(port, function () {
    console.log(`Weather App listening on port ! ${port}`);
});