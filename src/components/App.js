import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import Main from './Main';
import LoginForm from './LoginForm';
import reducers from '../reducers/';
import rootSaga from '../sagas/';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={LoginForm} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
