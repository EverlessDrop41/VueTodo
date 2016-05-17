'use strict';

var Vue = require('vue');

var todo_vue = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [
      { name: 'Add some todos', completed: false },
      { name: 'Add some more todos', completed:false },
      { name: 'Setup basic todo app', completed: true }
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
    removeTodo: function (index) {
      this.todos.splice(index, 1)
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

for (var i = 0; i < 7; i++) {
  todo_vue.todos.$set(i, {
    name: makeid(),
    completed: false
  });
}
