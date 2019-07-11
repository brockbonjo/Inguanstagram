import React from 'react';
import { Link } from 'react-router-dom';
import userServices from '../utils/userServices'
//general purpose form that can be used for other forms
class SignUpForm extends Component{

    state={
        name:'',
        email:'',
        password:'',
        passwordConf:''
    };


    handleChange = (e) => {
        this.props.updateMessage('');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userServices.signup(this.state);
            this.props.handleSignupOfLogin();
            this.props.history.push('/');
        } catch(err){
            this.props.updateMessage(err.message);
        }
    }
    isFormInvalid(){
        return !(this.state.name && this.state.email && this.state.password === this.state.passwowrdConf);
    }
    
    render(){
        return(
             <div>
                 <header className="header-footer">Sign UP</header>
                 <form className="form-horizontal" onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" placeHolder="Name" value={this.state.name} name="Name" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="email" className="form-control" placeHolder="Email" value={this.state.name} name="Email" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="password" className="form-control" placeHolder="Password" value={this.state.name} name="Password" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="password" className="form-control" placeHolder="Password" value={this.state.name} name="Confirm Password" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='col-sm-12 text-center'>
                            <button className="btn btn-default" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
                                <Link to='/'>Cancel</Link>
                        </div>
                    </div>
                 </form>
             </div>
        )
    }
}
export default SignUpPage