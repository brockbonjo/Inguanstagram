import React from 'react'
import { Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { PromiseProvider } from 'mongoose';

function LandingPage(props){
    return(

    <div>
          <NavBar 
          user = {props.user}
          handleSignOrLogin = {props.handleSignOrLogin}
          />
    </div>
        )
}

export default LandingPage;