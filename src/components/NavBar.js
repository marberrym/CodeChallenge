import React from 'react';
import { Link } from 'react-router-dom';

let NavBar = () =>
    <div className="navBar">
        <Link to="/" ><div className="navLink">Users</div></Link>
        <Link to="/albums" ><div className="navLink">All Albums</div></Link>
    </div>

export default NavBar;