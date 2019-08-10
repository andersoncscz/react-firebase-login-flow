import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './home/Home';
import Login from './login/Login';
import Splash from './splash/Splash';
import PrivateRoute from './PrivateRoute'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Splash} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/home" component={Home} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
)

    
export default Routes;
//() => <div className="d-flex justify-content-center align-items-center vh-100 vw-100">loading</div>