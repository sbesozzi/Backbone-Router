import Backbone from 'backbone';

let TodosCollection = Backbone.Collection.extend( {
  // Grabbing data from API in ajax_setup
  url: 'https://api.parse.com/1/classes/Todo',

  // Passes raw response object after collection's model returned by the server (ajax_setup)
  parse: function(data) {
    return data.results;
  }

});

export default TodosCollection;
