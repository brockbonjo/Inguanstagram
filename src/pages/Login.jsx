import React from 'react'
import { Link } from 'react-router-dom'
import userServices from '../utils/userServices'

class Login extends React.Component{
    state = {
        username:'',
        password:''
    }

    handleChange = (e) => {
        this.setsState({
            [e.target.name]: e.target.value
        });
    }

    handleSignupOrLogin = () => {
        this.setState({user: userServices.getUser()})};


    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userServices.login(this.state);
            // in apps ultimately getsUser, => getTokenfrom User
            this.props.handleSignupOrLogin();
            this.props.history.push('/');
        } catch(err){
            console.log(err)
            console.log('Invalid Credentials');
        }
    }
    isFormInvalid(){
        return !(this.state.name&& this.state.password === this.state.passwowrdConf);
    }

    render() {
        return (
          <div className="LoginPage">
            <header className="header-footer">Log In</header>
            <form className="form-horizontal" onSubmit={this.handleSubmit} >
              <div className="form-group">
                <div className="col-sm-12">
                  <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
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