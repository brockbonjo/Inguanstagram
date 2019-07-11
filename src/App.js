import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import userService from './utils/userServices'
import { updateExpression } from '@babel/types';

class App extends Component{
  constructor(){
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    this.setState({user: null});
  } 

handleSignupOrLogin = () => {
  this.setState({user: userService.getUser()});
}
  // After authentication, createpost function
        render(){
  return (
      <Router>
    <div className="App">
      <header className='header-footer'>Inguanstgram</header>
      <Switch>
        <Route exact path = '/' render = {() =>
          <LandingPage />
        }/>
      </Switch>
    </div>
    </Router>
  );
  }
}

export default App;
