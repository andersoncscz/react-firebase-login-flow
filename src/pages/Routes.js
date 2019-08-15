import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './home/Home';
import SignIn from './login/SignIn';
import SignUp from './login/SignUp';
import Splash from './splash/Splash';
import PageError from './error/PageError';
import PrivateRoute from './PrivateRoute'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Splash} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute path="/home" component={Home} />
            <Route path="*" component={() => <PageError code="404" text="Page not found" />} />
        </Switch>
    </BrowserRouter>
)

    
export default Routes;
//() => <div className="d-flex justify-content-center align-items-center vh-100 vw-100">loading</div>