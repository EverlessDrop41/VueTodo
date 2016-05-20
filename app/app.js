'use strict';

var todo_vue = require('./todo.js');

//Generate sample values
function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

for (var i = 3; i < 10; i++) {
  todo_vue.todos.$set(i, {
    _id: makeid(),
    name: makeid(),
    completed: Math.random() >= 0.8
  });
}
