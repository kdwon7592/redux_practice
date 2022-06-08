import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import TodoApp from './components/TodoApp';
import { taskReducer } from './reducers/task';

const store = createStore(taskReducer);

function renderApp(store) {
  render(
    <TodoApp store={store}></TodoApp>,
    document.getElementById('root')
  )
}

store.subscribe(() => renderApp(store));
renderApp(store);