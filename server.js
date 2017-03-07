const path = require('path')
const express = require('express')
var bodyParser = require('body-parser');
var parseUrlEncoded = bodyParser.json();

module.exports = {
  app: function () {
    var expenseArray = [],
    groupArray = []; 
    const app = express();
    const indexPath = path.join(__dirname, 'index.html');
    const publicPath = express.static(path.join(__dirname, '/style'));
    app.use('/style', publicPath);
    app.get('/', function (_, res) { res.sendFile(indexPath) });
    app.get('/api/expense', function(request, response){
  	  response.json(expenseArray);
    })
    app.post('/api/expense',parseUrlEncoded, function(request, response){
      var newBlock = request.body;
      expenseArray.push(newBlock)
      response.status(201).json(newBlock);
    })
    app.post('/api/newgroup', parseUrlEncoded, function(request,response){
      var newBlock = request.body
      groupArray.unshift(newBlock)
      response.status(201).json(newBlock)
    })
    app.get('/api/groups', function(request,response){
      response.json(groupArray)
    })
    return app;
  }
}