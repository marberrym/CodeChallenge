import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

let NotFound = () =>
    <div className="pageLayout">
        <NavBar/>
        <Header/>
        <div>Uh oh you got lost.</div>
    </div>

export default NotFound;