import React, { Component } from 'react';
import './App.css';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';




class App extends Component {


  render() {
    return (
      <div className="App">
        <ClassMouse />
        <HookMouse />
      </div>
    );
  }
}

export default App;
