import React from 'react'
import { Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Post from '../components/Post'
import { PromiseProvider } from 'mongoose';

function LandingPage(props){
    return(

    <div>
          <NavBar 
          user = {props.user}
          />
          <Post 
          /*crud operations are 
            to be passed down here */
          />
    </div>
        )
}

export default LandingPage;