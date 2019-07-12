import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import userServices from './utils/userServices'
import SignUpPage from './components/SignupForm';
import Login from './pages/Login'

class App extends Component{
  constructor(){
    super();
    this.state = {
      user: userServices.getUser()
    };
  }

  handleLogout = () => {
    userServices.logout();
    this.setState({user: null});
  } 

handleSignupOrLogin = () => {
  this.setState({user: userServices.getUser()});
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
        <Route exact path = '/signup' render = {(props) =>
          <SignUpPage 
            {...props}
            user = {this.state.user}
            handleSignupOrLogin={this.handleSignupOrLogin}
              />
          }/>
          <Route exact path='/login' render = {(props) =>
          <Login
          {...props}
          user={this.state.user}
          handleSignupOrLogin = {this.handleSignupOrLogin}
            />
          }/>
      </Switch>
    </div>
    </Router>
    );
  }

}

export default App;
