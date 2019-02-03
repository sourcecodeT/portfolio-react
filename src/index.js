import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducers from './redux/reducers';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={createStore(rootReducers)}>
    <BrowserRouter basename="/portfolio-react">
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);

serviceWorker.unregister();
