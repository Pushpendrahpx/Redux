import React from 'react';
import './App.css';
import {connect } from 'react-redux'

function App(props) {
  console.log(props)
  return (
    <div className="App">
       <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return({
    myname:state.name
  })
}

export default connect(mapStateToProps)(App);
