import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
     
      <FunctionClick/>
      <ClassClick/>
{/* react events are named using camel case azn to be in upperCase */}
     
    </div>
  );
}

export default App;
