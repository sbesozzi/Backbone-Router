import $ from 'jquery';
// Import other js files
import Router from './router';

import './ajax_setup';

import TodosCollection from './todo_collection';
window.TodosCollection = TodosCollection;

// Create var and jquery to grab pass to router
var appElement = $('.app');

// Create router and start w/ function
var router = new Router(appElement);
router.start();

console.log('Hello, World');
