import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    let nav = props.user ?
    <div>
        <Link to='' onClick={props.handleLogout}>Log Out</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <span>Welcome, {props.user.name}</span> 
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <p>+</p>
    </div>
    :
    <div>
        <Link to='/login'>Login</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup'>SignUp</Link>
    </div>;
    return(
        <div>
            { nav }
        </div>
    );
};

export default NavBar;