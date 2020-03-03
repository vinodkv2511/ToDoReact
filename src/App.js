import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Home></Home>
        </div>
      </Provider>
    );
  }
}

export default App;
