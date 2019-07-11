import React, { Component } from 'react';
import ReactDom  from 'react-dom';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';

class App extends React.Component{
  render(){
  return (
    <div className="App">
      <LandingPage />
      {/* create login component */}
      {/* create landing/gallery page component */}
      {/* create submit page component */}
      {/* create  page component */}
    </div>
  );
  }
}

export default App;
