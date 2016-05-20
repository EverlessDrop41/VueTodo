var Vue = require('vue');
var swal = require('sweetalert');

Vue.use(require('vue-resource'));

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

  ready: function () {
    // GET request
    this.$http({url: '/api/todos', method: 'GET'}).then(function (response) {
      if (response.ok) {
        var todosToAdd = response.data.todos;

        for (var i = 0; i < todosToAdd.length; i++) {
          var todo = todosToAdd[i];
          todo_vue.todos.$set(i, {
            _id: todo._id,
            name: todo.name,
            completed: todo.completed
          });
        }
      } else {
        swal("Oops...", "There was an internal server error!", "error");
      }
    }, function (response) {
      swal("Oh noes!", "We were unable to load the todos", "error");
    });
  },

  methods: {
    addTodo: function () {
      var name = this.newTodo.trim();
      this.newTodo = '';
      if (name) {
        this.$http({
          url: '/api/todos',
          method: 'POST',
          data: { name: name, completed: false }
        }).then(function (response) {
          if (response.ok) {
            console.log(response.data.todo);
            this.todos.push(response.data.todo);
            swal("Success!", "Your todo was successfully added");
          } else {
            swal("Oops...", "There was an internal server error!", "error");
          }
        }, function (response) {
          swal("Oh noes!", "We were unable to add the todo", "error");
        });
      }
    },

    removeTodo: function (id) {
      var hasBeenRemoved = false;
      for (var i = 0; i < this.todos.length; i++) {
        var currentTodoToCheck = this.todos[i];

        if (currentTodoToCheck._id == id) {
          this.todos.splice(i, 1);
          hasBeenRemoved = true;
        }
      }
      return hasBeenRemoved;
    }

  }
});

module.exports = todo_vue;
