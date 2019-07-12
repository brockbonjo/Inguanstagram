import React from 'react'


class Login extends React.Component{
    state = {
        username:'',
        password:''
    }

    handleSignupOrLogin = () => {
        this.setState({user: userServices.getUser()})};


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
                        <input type="text" className="form-control" placeholder="Password" value={this.state.username} name="password" onChange={this.handleChange} />
                    </div>
                </div>
            </form>
    </div>
            )
        }
    };

export default Login