const path = require('path')
const express = require('express')
var bodyParser = require('body-parser');
var parseUrlEncoded = bodyParser.json();

module.exports = {
  app: function () {
    var expenseArray = []; 
    const app = express();
    const indexPath = path.join(__dirname, 'index.html');
    const publicPath = express.static(path.join(__dirname, '/style'));
    app.use('/style', publicPath);
    app.get('/', function (_, res) { res.sendFile(indexPath) });
    app.get('/expense', function(request, response){
  	  response.json(expenseArray);
    })
    app.post('/expense',parseUrlEncoded, function(request, response){
      var newBlock = request.body;
      expenseArray.push(newBlock)
      response.status(201).json(newBlock);
    })

    return app;
  }
}