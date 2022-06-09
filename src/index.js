import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TodoAppContainer from './containers/TodoAppContainer';
import { taskReducer } from './reducers/task';

const store = createStore(taskReducer);

render(
  <Provider store={store}>
    <TodoAppContainer />
  </Provider>,
  document.getElementById('root')
)
