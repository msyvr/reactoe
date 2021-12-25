import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tictactoe from './components/tictactoe';

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <a href = "https://reactjs.org/" target="_blank" ><img src={logo} className="App-logo" alt="logo" /></a>
        <a href = "https://github.com/msyvr/reactoe" target = "_blank">play tic tac toe</a>
      </div>
      <div className="App-body">
        <Tictactoe />
      </div>
    </div>
  );
}

export default App;
