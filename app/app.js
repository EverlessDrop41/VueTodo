'use strict';

var Vue = require('vue');

var todo_vue = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [
      { _id: "4sAg78", name: 'Add some todos', completed: false },
      { _id: "5fD9Jg", name: 'Add some more todos', completed:false },
      { _id: "1sK920", name: 'Setup basic todo app', completed: true }
    ]
  },
  methods: {
    addTodo: function () {
      var name = this.newTodo.trim()
      if (name) {
        this.todos.push({ name: name, completed: false })
        this.newTodo = ''
      }
    },
    removeTodo: function (id) {
      for (var i = 0; i < this.todos.length; i++) {
        var currentTodoToCheck = this.todos[i];

        if (currentTodoToCheck._id == id) {
          this.todos.splice(i, 1);
        }
      }
    }
  }
});

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
