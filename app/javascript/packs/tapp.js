import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import '../tapp-styles';
import * as reducers from '../../src/appReducer';
import  { TAPP }  from '../../src/containers/tapp';

const appStore = createStore(combineReducers(reducers), applyMiddleware(thunk));

// Remove later on, just use for development
appStore.subscribe(() => {
  console.log(appStore.getState());
})

// Because the script is being imported in HEAD, we need to wait till it's loaded before we render
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={appStore}>
      <TAPP />
    </Provider>,
    document.getElementById('root')
  )
});
