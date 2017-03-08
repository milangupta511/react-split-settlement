
const path = require('path')
const express = require('express')
var bodyParser = require('body-parser');
var parseUrlEncoded = bodyParser.json();

module.exports = {
  app: function () {
    var expenseArray = [],
    groupArray = [],
    activityArray= [],
    activityType ={
                    0:
                      { 0:"newGroup",
                        1:"updateGroup",
                        2:"deleteGroup"
                      },
                    1:
                      { 0:"newExpense",
                        1: "updateExpense",
                        2:"deleteExpense"
                      },
                    2:
                      { 0:"newExpenseGroup",
                        1:"updateExpenseGroup",
                        2: "deleteExpenseGroup"
                      }
                  };
    const app = express();
    const indexPath = path.join(__dirname, 'index.html');
    const publicPath = express.static(path.join(__dirname, '/style'));
    app.use('/style', publicPath);
    app.get('/', function (_, res) { res.sendFile(indexPath) });
    app.get('/api/expense', function(request, response){
  	  response.json(expenseArray);
    })
    app.post('/api/expense',parseUrlEncoded, function(request, response){
      var newExpense = request.body;
      expenseArray.push(newExpense)
      response.status(201).json(newExpense);
    })
    app.post('/api/newgroup', parseUrlEncoded, function(request,response){
      var newGroup = request.body,
      newActivity={
        type:"0.0",
        title: newGroup.groupName,
        desc: newGroup.groupMember
      };
      groupArray.unshift(newGroup)
      response.status(201).json(newGroup)
      activityArray.unshift(newActivity);

    })

    app.get('/api/activity', function(request,response) {
      response.json(activityArray);
    })
    app.get('/api/groups', function(request,response){
      response.json(groupArray)
    })
    return app;
  }
}