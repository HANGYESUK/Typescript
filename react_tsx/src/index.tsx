import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

interface Counter {
  count : number
}

const num :Counter  = { count: 0 };

// num타입 지정하면 state는 자동으로 타입 지정됨
function reducer(state = num, action :any) {
  if (action.type === '증가') {
    return { count : state.count + 1 }
  } else if (action.type === '감소'){
    return { count : state.count - 1 }
  } else {
    return state
  }
}

const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
