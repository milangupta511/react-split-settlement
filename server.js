const path = require('path')
const express = require('express')

module.exports = {
  app: function () {
    const app = express();
    const indexPath = path.join(__dirname, 'index.html');

    app.get('/', function (_, res) { res.sendFile(indexPath) });
    app.get('/blocks', function(request, response){
	var blocks = ["Fixed", "Movable", "Rotating"]
	if(request.query.limit >=0 && request.query.limit <= blocks.length - 1){
		response.json(blocks.slice(0, request.query.limit));
	} else{
	  response.json(blocks);
	}

});

    return app;
  }
}