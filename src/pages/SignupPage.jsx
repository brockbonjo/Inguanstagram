import React, { Component } from 'react';
import SignupForm from '../components/SignupForm'

// make a styling module

class SignupPage extends Component {
    constructor(props){
        super(props)
        this.state = {message:''}
    }
    updateMessage = (msg) => {
        this.setState({message: msg})
    }

    render(){
        return (
            <div className='SignupPage'>
                <SignupForm {...this.props} updateMessage={this.updateMessage} />
                <p>{this.state.message}</p>
                <p>SignupPage</p>
            </div>
        );
    }
}

export default SignupPage;