import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk'; // Middleware
import firebase from 'firebase';
import Router from './src/Router';


class App extends Component {

  componentWillMount() {

    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyD8L50TFrby8iq40-D_lNe0MkK0VaqP27A',
      authDomain: 'manager-c3716.firebaseapp.com',
      databaseURL: 'https://manager-c3716.firebaseio.com',
      projectId: 'manager-c3716',
      storageBucket: 'manager-c3716.appspot.com',
      messagingSenderId: '879536277465'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));  // Adding middleware redux-thunk in store.
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;