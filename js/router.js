import Backbone from 'backbone';

import TodosCollection from './todo_collection';
import homeTemplate from './views/home';
import todosTemplate from './views/todos';

// Call extend method
let Router = Backbone.Router.extend({
  // Routes & functions called when routes trigered
  routes: {
    "" : "home",
    "todos" : "showTodos",
    "about": "showAbout"
  },

  // Initialize pass in appElement
  initialize: function(appElement) {
    // Store jquery el to appElement
    this.$el = appElement;
    // Create new instance of todos
    this.todos = new TodosCollection();
  },

  // Create each function
  home: function() {
    console.log('show home page');
    this.$el.html(homeTemplate);
  },

  showTodos: function() {
    console.log('show todos page');
    // this.$el.html(todosTemplate([
    //   {title: 'Foo'},
    //   {title: 'Bar'}
    //   ]) );
    this.todos.fetch().then(function(){
      // jqeury element grabs JSON data to todos template
      // 'this' refers to router
      this.$el.html( todosTemplate(this.todos.toJSON()) );
    // Bind todos data together
    }.bind(this));
  
  },

  showAbout: function() {
    console.log('show about page');
  },

  // Create function on router to start watching history
  start: function() {
    Backbone.history.start();
  }

});

export default Router;