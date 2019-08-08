import React from 'react';
import { withRouter } from "react-router-dom";
import { Animated } from "react-animated-css";

import backgroundImage from '../../assets/images/wallpaper-vector.jpg';
import loginLogo from '../../assets/images/login-logo.png';
import LoginForm from './LoginForm';


const Login = props => {

    return (
        <div className="vh-100 vw-100">
            <div className="d-flex justify-content-center h-100 align-items-start p-5" style={{backgroundImage:`url(${backgroundImage})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
                <div style={{height: 640, width: 350}}>
                    <div className="h-100 align-items-stretch shadow-lg p-1 bg-white rounded">
                        <div className="d-flex flex-column h-100 p-4">
                            <Animated className="flex-fill h-50 pt-5" animationIn="fadeIn" animationInDuration={2000} isVisible={true}>
                                <img alt="" className="img-fluid" src={loginLogo}></img>
                            </Animated>
                            <div className="flex-fill h-75">
                                <LoginForm {...props} />
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default withRouter(Login);
