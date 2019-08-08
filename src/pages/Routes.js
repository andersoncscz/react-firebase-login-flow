import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Index from './index/Index';
import Login from './login/Login';

const isAuthenticated = () => true;
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ props => isAuthenticated() 
            ? (<Component {...props} />) 
            : (<Redirect to={{ pathname: "/", state: { from: props.location } }} />)
        }
    />
);


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login} />
            <PrivateRoute path="/index" component={Index} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
    
)
export default Routes;