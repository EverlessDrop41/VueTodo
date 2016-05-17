'use strict';

var Vue = require('vue');

new Vue({
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
