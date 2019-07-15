import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userServices from '../utils/userServices'
//general purpose form that can be used for other forms
class SignUpPage extends Component{
// react method
    state={
        username:'',
        email:'',
        password:'',
        passwordConf:''
    };

    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userServices.signUp(this.state);
            // in apps ultimately getsUser, => getTokenfrom User
            this.props.handleSignupOrLogin();
            this.props.history.push('/');
        } catch(err){
            console.log(err)
            console.log('testing');
        }
    }
    isFormInvalid(){
        return !(this.state.name && this.state.email && this.state.password === this.state.passwowrdConf);
        //TODO Error message stating the password is invalid(# of chars)
    }
    
    render(){
        return(
             <div>
                 <header className="header-footer">Sign UP</header>
                 <form className="form-horizontal" onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" placeholder="Name" value={this.state.username} name="username" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="password" className="form-control" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="password" className="form-control" placeholder="Confirm password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                            <button className="btn btn-default">Sign Up</button>&nbsp;&nbsp;
                            <Link to='/'>Cancel</Link>
                        </div>
                    </div>
                 </form>
             </div>
        )
    }
}
export default SignUpPage