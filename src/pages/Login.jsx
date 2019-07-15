import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import userService from '../utils/userServices'

class Login extends React.Component{
    state = {
        username:'',
        password:''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSignupOrLogin = () => {
        this.setState({user: userService.getUser()})};
        
        
        handleSubmit = async (e) => {
            e.preventDefault();
            try {
                await userService.login(this.state);
                this.props.handleSignupOrLogin();
                this.props.history.push('/');
            } catch(err){
                console.log(err + "login err")
               console.log('Invalid Credentials');
            }
            //TODO check to see if passing a history prop will work
        }


    render() {
        return (
          <div className="LoginPage">
            <header className="header-footer">Log In</header>
            <form className="form-horizontal" onSubmit={this.handleSubmit} >
              <div className="form-group">
                <div className="col-sm-12">
                  <input type="username" className="form-control" placeholder="Username" value={this.state.username} name="username" onChange={this.handleChange} />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input type="password" className="form-control" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12 text-center">
                  <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
                  <Link to='/'>Cancel</Link>
                </div>
              </div>
            </form>
          </div>
        );
      }
    }
    

export default Login