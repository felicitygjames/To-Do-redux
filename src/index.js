import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { addTodo, toggleTodo, editTodo, deleteTodo } from './actions/index.js';
import todos from './reducers/index.js';

const store = createStore(todos);

ReactDOM.render(<App />, document.getElementById('root'));


store.dispatch(addTodo('Dispatch my first action'));
console.log('State after adding first todo', store.getState());

store.dispatch(toggleTodo(0));
console.log('State after toggling first todo', store.getState());

store.dispatch(editTodo('Dispatch my first action'));
console.log('State after editing first todo', store.getState());

store.dispatch(deleteTodo('Dispatch my first action'));
console.log('State after deleting first todo', store.getState());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
