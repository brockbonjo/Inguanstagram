import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import userService from './utils/userServices'
import SignUpPage from './components/SignupForm';


class App extends Component{
  constructor(){
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
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
          <LandingPage 
          user = {this.state.user}
          handleLogout = {this.handleLogout}
          />
        }/>
        <Route exact path = '/signup' render = {() =>
          <SignUpPage 
            user = {this.state.user}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }/>
      </Switch>
    </div>
    </Router>
  );
  }
}

export default App;
