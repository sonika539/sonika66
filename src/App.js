import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Test, addReducer } from './components/Test';

export const store = createStore(
  addReducer,
  { text: '', userData: [], suggestions: [] },
  applyMiddleware(thunk)
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Test} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
