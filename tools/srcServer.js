var express = require('express');
var webpack = require('webpack');
var path = require('path');
var config = require('../webpack.config.dev');
var open = require('open');
var bodyParser = require('body-parser');
var db = require('../repository/database');

/* eslint-disable no-console */

var port = 3000;
var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

//Middleware
app.use(function (req, res, next) {
  // allow origin for demo purposes
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

// Routes
app.get('/todos', function(req, res, next) {
  db.getAll(function(todos) {
    res.send(todos);
    next();
  });
});

app.post('/todos', function(req, res, next) {
  let todo = req.body;
  db.add(todo, function(todos) {
    res.send(todos);
    next();
  });
});

app.post('/todos/update', function(req, res, next) {
  let todo = req.body;
  db.update(todo, function(todos) {
    res.send(todos);
    next();
  });
});

app.delete('/todos/:id', function(req, res, next) {
  let id = req.params.id;
  
  db.del(id, function(todos) {
    res.send(todos);
    next();
  });
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});

