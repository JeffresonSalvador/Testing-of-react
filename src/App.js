import React from 'react';
import logo from './logo.svg';
import './App.css';
import './component/Test.css';

import FunctionClick from './component/FunctionClick';
import classclick from './component/ClassClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import Message from './component/Message';
import TodoList from './component/TodoList';
import Test from './component/Test';


function App() {
  return (
    <div className="App">

    
       
     <ClassClick ></ClassClick>

      {/* <Message/> */}

      
      {/* <ParentComponent></ParentComponent> */}
      {/* <EventBind></EventBind> */}

      {/* <ClassClick></ClassClick> */}
      
      {/* <p>

      <Message/>
      <Counter/>                        

      hello
      <Greet name = "jeffpogi" heroname="SuperPogi">
        <p>this is superhuman</p>  </Greet>

      <Welcome name = "jeffpogi" heroname="SuperPogi">
      <p>this is superhuman</p>
      </Welcome>


      </p>
       */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}


          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
    </div>
  );
}

export default App;
