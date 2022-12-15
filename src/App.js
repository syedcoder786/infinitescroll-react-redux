import React, { Component } from 'react';
import Albums from './components/Albums';
import {Provider} from 'react-redux';
import store from './store';
// import {loadUser} from './actions/authActions'

class App extends Component {
  // componentDidMount(){
  //   store.dispatch(loadUser())
  // }
  
  render() {
    return (
      <Provider store={store}>
        <div>
          <center>
            <h1>Infinite scroll using React and Redux</h1>
            <hr/>
            <Albums/>
          </center>
        </div>
      </Provider>
    );
  }
}

export default App;
