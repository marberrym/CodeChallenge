import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './screens/App';
import Albums from './screens/Albums';
import UserPage from './screens/UserPage';
import PhotoList from './screens/PhotoList';
import MainPhoto from './screens/MainPhoto';
import NotFound from './screens/NotFound';

let Router = () =>
    <HashRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/albums' component={Albums} />
            <Route exact path='/user/:id' component={UserPage} />
            <Route exact path='/album/:id' component={PhotoList} />
            <Route exact path='/photo/:id' component={MainPhoto} />
            <Route path="/*" component={NotFound} />
        </Switch>
    </HashRouter>

export default Router;
                
            
